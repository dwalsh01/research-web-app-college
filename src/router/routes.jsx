import React from 'react';
import {Route} from 'react-router-dom';
import GridCards from '../components/GridCards';
import Test from '../components/Test';

const Routes = () => (
  <div>
  <Route exact path='/' component={GridCards} />
  <Route path='/request' component={Test} />
  </div>
  );

  export default Routes;