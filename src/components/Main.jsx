import React from 'react';
import ToolbarHeader from './toolbar/ToolbarHeader';
import Routes from '../router/routes';

const Main = () => (
  <div>
    <ToolbarHeader>
      <Routes />
    </ToolbarHeader>
  </div>
);

export default Main;
