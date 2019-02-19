import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GridCards from '../components/requests/GridCards';
import Profile from '../components/profile/Profile';
import NoMatch from '../components/404/404';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={GridCards} />
    <Route path="/profile" component={Profile} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
