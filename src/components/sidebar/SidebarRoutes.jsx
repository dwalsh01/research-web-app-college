import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core';
import ListItemLink from '../../util/links/ListItemLink';
import NestedProposals from '../../util/links/NestedProposals';
import Can from '../../config/Can';

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
    <Can I="view" a="Profile">
      {() => <ListItemLink route="profile" text="Profile" />}
    </Can>
    <NestedProposals />
  </List>
);

export default withStyles(styles)(SidebarRoutes);
