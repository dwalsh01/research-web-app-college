import React from 'react';
import ToolbarHeader from './ToolbarHeader';
import Routes from '../router/routes';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import TestingLogin from './TestingLogin';
import GridCards from './GridCards';
import Registration from './Registration';
import NoMatch from './404';

const App = () => (
  <div>
    <Routes />
    {/*<Landing />
     <ToolbarHeader>
      <TestingLogin />
    </ToolbarHeader> */}
  </div>
);

export default App;
