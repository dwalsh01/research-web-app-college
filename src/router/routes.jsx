import React from 'react';
import {Route, Switch} from 'react-router-dom';
import GridCards from '../components/GridCards';
import Test from '../components/Test';
import NoMatch from '../components/404';
const Routes = () => (
  <Switch>
    <Route exact path='/' component={GridCards} />
    <Route path='/request' component={Test} />
    <Route component={NoMatch} />
  </Switch>
  );

  export default Routes;