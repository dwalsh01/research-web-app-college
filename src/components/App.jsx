import React from 'react';
import ToolbarHeader from './ToolbarHeader';
import Routes from '../router/routes';

const App = () => (
  <div>
    <ToolbarHeader>
      <Routes />
    </ToolbarHeader>
  </div>
);

export default App;
