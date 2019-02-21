import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GridCards from '../components/requests/GridCards';
import Profile from '../components/profile/Profile';
import NoMatch from '../components/404/404';
import Proposals from '../components/propsals/Proposals';
import Teams from '../components/teams/Teams';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={GridCards} />
    <Route path="/profile" component={Profile} />
    <Route path="/teams" component={Teams} />
    <Route path="/proposals" component={Proposals} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
