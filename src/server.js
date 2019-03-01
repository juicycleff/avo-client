import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { I18nextProvider } from 'react-i18next';
import * as path from 'path';
import fs from 'fs';
import * as i18nextMiddleware from 'i18next-express-middleware';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import Backend from 'i18next-node-fs-backend';

import { ServerStyleSheet } from 'styled-components';
import i18n from './i18n';

import App from './App';

const statsFile = path.resolve('./build/loadable-stats.json');

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const appSrc = resolveApp('src');

i18n
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init(
    {
      preload: ['en'],
      backend: {
        loadPath: `${appSrc}/locales/{{lng}}/{{ns}}.json`,
        addPath: `${appSrc}/locales/{{lng}}/{{ns}}.missing.json`,
      },
    },
    () => {
      server
        .disable('x-powered-by')
        .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
        .use(i18nextMiddleware.handle(i18n))
        .get('/*', (req, res) => {
          // Render the app
          const context = {};
          // Create the server side style sheet
          const sheet = new ServerStyleSheet();
          const extractor = new ChunkExtractor({ statsFile });

          // When the app is rendered collect the styles that are used inside it
          const markup = renderToString(sheet.collectStyles(
            <ChunkExtractorManager extractor={extractor}>
              <I18nextProvider i18n={req.i18n}>
                <StaticRouter context={context} location={req.url}>
                  <App />
                </StaticRouter>
              </I18nextProvider>
            </ChunkExtractorManager>,
          ));

          const linkTags = extractor.getLinkTags();
          // Generate all the style tags so they can be rendered into the page
          const styleTags = sheet.getStyleTags();

          const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
          // You can also collect your "preload/prefetch" links
          // And you can even collect your style tags (if you use "mini-css-extract-plugin")
          // const styleTags = extractor.getStyleTags() // or extractor.getStyleElements();

          const head = Helmet.rewind();

          const { url } = context;
          if (url) {
            res.redirect(url);
          } else {
            const initialI18nStore = {};
            req.i18n.languages.forEach((l) => {
              initialI18nStore[l] = req.i18n.services.resourceStore.data[l];
            });
            const initialLanguage = req.i18n.language;

            res.send(
              `<!doctype html>
              <html lang="en-us">
                  <head>
                      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                      <meta charSet='utf-8' />
                      <title>AVO Artist Booking E-Agency</title>
                      <meta name="viewport" content="width=device-width, initial-scale=1">
                      
                      ${linkTags}
                      ${styleTags}
                      <link href="https://fonts.googleapis.com/css?family=Comfortaa|Josefin+Sans|Montserrat|Nova+Flat|Nunito|Open+Sans+Condensed:300" rel="stylesheet">
                      ${
  assets.client.css
    ? `<link rel="stylesheet" href="${assets.client.css}">`
    : ''
}
                                                  ${
  process.env.NODE_ENV === 'production'
    ? `<script src="${assets.client.js}" defer></script>`
    : `<script src="${assets.client.js}" defer crossorigin></script>`
}
                      <!-- Render the style tags gathered from the components into the DOM -->
                      ${scriptTags}
                      <script>
                        window.initialI18nStore = JSON.parse('${JSON.stringify(initialI18nStore)}');
                        window.initialLanguage = '${initialLanguage}';
                      </script>
                  </head>
                  <body>
                      <div id="root">${markup}</div>
                  </body>
              </html>`,
            );
          }
        });
    },
  );


export default server;

/*
${head.base.toComponent()}
              ${head.title.toComponent()}
              ${head.meta.toComponent()}
              ${head.link.toComponent()}
              ${head.script.toComponent()} */