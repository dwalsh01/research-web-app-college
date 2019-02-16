import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GridCards from '../components/GridCards';
import NoMatch from '../components/404';
import { Home } from '../components/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={GridCards} />
    <Route exact path="/home" component={Home} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
