import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import './app.global.scss';

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextRoot = require('./routes').routes; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
