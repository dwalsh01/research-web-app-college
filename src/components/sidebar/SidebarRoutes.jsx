import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core';
import ListItemLink from '../../util/links/ListItemLink';
import NestedItemLink from '../../util/links/NestedItemLink';
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
    <NestedItemLink />
  </List>
);

export default withStyles(styles)(SidebarRoutes);
