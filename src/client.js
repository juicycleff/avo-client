/* eslint-disable no-undef */
import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import i18n from 'i18n';
import App from './App';

loadableReady(() => {
  hydrate(
    <I18nextProvider
      i18n={i18n}
      initialI18nStore={window.initialI18nStore}
      initialLanguage={window.initialLanguage}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>,
    document.getElementById('root'),
  );
});

if (module.hot) {
  module.hot.accept();
}
