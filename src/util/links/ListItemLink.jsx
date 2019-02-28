import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
// TODO: add active class if route is the same as passed prop
function ListItemLink({ route = '', text, ...props }) {
  return (
    <ListItem button component={Link} to={`/${route}`} {...props}>
      <ListItemText primary={text} />
    </ListItem>
  );
}

export default ListItemLink;
