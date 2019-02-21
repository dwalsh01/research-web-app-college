import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core';
import ListItemLink from '../../util/ListItemLink';
// Profile
// home
// proposals
// Teams
// Reviewer: Assigned proposals
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const SidebarRoutes = ({ classes }) => (
  <List className={classes.root}>
    <ListItemLink text="Home" />
    <ListItemLink route="profile" text="Profile" />
    <ListItemLink route="proposals" text="Proposals" />
    <ListItemLink route="teams" text="Teams" />
  </List>
);

export default withStyles(styles)(SidebarRoutes);
