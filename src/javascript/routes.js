import React from 'react';
import {IndexRoute, Route} from 'react-router';
import AppContainer from './containers/AppContainer';
import Module1Container from './containers/Module1Container';
import Module2Container from './containers/Module2Container';

const routes = (
  <Route path="/" component={AppContainer}>
    <Route path="sub1/:id" component={Module1Container} />
    <Route path="sub2/:id" component={Module2Container} />
  </Route>
);
export default routes;
