import React from 'react';
import ToolbarHeader from './ToolbarHeader';
import Routes from '../router/routes';
import Landing from './Landing';

// TODO:
// FIX UP LANDING PAGE SHOWING DEPENDING ON LOGGED IN USER
// AND THIS IS DONE HERE
// ALSO MAKE SURE TO RESTRUCTURE PROJECT SLIGHTLY
const App = () => (
  <div>
    <ToolbarHeader>
      <Routes />
    </ToolbarHeader>
  </div>
);

export default App;
