/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, hashHistory } from 'react-router';
import {HashRouter, StaticRouter, MemoryRouter} from 'react-router-dom';
import App from './app';
import HomePage from './routes/Home';
import VanillaPage from './routes/vanilla/Vanilla';
import WaiterPage from './routes/waiter/Waiter';
const context = {};

export default () => (
  <App>
    <MemoryRouter>
        <Switch>
          <Route path="/vanilla" component={VanillaPage} />
          <Route path="/waiter" component={WaiterPage} />
          <Route path="/" component={HomePage} />
        </Switch>
    </MemoryRouter>
  </App>
);
