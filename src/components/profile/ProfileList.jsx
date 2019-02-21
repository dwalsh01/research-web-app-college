import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemLink from '../../util/ListItemLink';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const ProfileList = ({ classes }) => (
  <div>
    <Divider />
    <List className={classes.root}>
      <ListItemLink route="profile/personal" text="Personal" />
      <ListItemLink route="profile/professional" text="Professional" />
    </List>
  </div>
);

export default withStyles(styles)(ProfileList);
