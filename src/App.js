import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ModalContainer } from 'react-router-modal';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import HomePage from 'pages/home';
import AboutPage from 'pages/about';
import ContactPage from 'pages/contact';
import ApplyPage from 'pages/apply';
import LoginPage from 'pages/login';

import './App.css';
import mainTheme from './theme';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Pasejro;
      src: url("fonts/pasejoro.eot"); /* IE9 Compat Modes */
      src: url("fonts/pasejoro.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
          url("fonts/pasejoro.woff") format("woff"), /* Modern Browsers */
          url("fonts/pasejoro.ttf")  format("truetype"), /* Safari, Android, iOS */
          url("fonts/pasejoro.svg#svgFontName") format("svg"); /* Legacy iOS */
  }
  body {
    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`;

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Fragment>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/apply" component={ApplyPage} />
      </Switch>
      <ModalContainer />
    </Fragment>
  </ThemeProvider>
);

export default App;
