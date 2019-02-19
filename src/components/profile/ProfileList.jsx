import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function ListItemLink(props) {
  return <ListItem button component={Link} to={`/profile/${props.id}`} {...props} />;
}
const ProfileList = ({ classes }) => (
  <List className={classes.root}>
    <ListItemLink id="test1">
      <ListItemText primary="Personal" />
    </ListItemLink>
    <ListItemLink id="test2">
      <ListItemText primary="Professional" />
    </ListItemLink>
  </List>
);

export default withStyles(styles)(ProfileList);
