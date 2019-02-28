import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GridCards from '../components/requests/GridCards';
import Profile from '../components/profile/Profile';
import NoMatch from '../components/404/404';
import Proposals from '../components/propsals/Proposals';
import Teams from '../components/teams/Teams';
import ProposalsInfo from '../components/propsals/Information/ProposalsInfo';
import ApplicationForm from '../components/propsals/Application/ApplicationForm';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={GridCards} />
    <Route path="/profile" component={Profile} />
    <Route path="/teams/dashboard" component={Teams} />
    <Route exact path="/proposals" component={Proposals} />
    <Route exact path="/proposals/:id" component={ProposalsInfo} />
    <Route exact path="/proposals/apply/:id" component={ApplicationForm} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
