import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core';
import ListItemLink from '../../util/links/ListItemLink';
import NestedItemLink from '../../util/links/NestedItemLink';
import NestedProposals from '../../util/links/NestedProposals';
import Can from '../../config/Can';
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
    <Can I="view" a="Researcher">
      {() => <ListItemLink route="profile" text="Profile" />}
    </Can>
    <NestedProposals />
    <Can I="view" a="Researcher">
      {() => <NestedItemLink />}
    </Can>
  </List>
);

export default withStyles(styles)(SidebarRoutes);
