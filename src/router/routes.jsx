import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GridCards from '../components/GridCards';
import NoMatch from '../components/404';
import Registration from '../components/Registration';
import Landing from '../components/Landing';
import LoginForm from '../components/login';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/registration" component={Registration} />
    <Route path="/login" component={LoginForm}/>
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
