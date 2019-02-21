import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

export default function ListItemLink({ route = '', text, ...props }) {
  return (
    <ListItem button component={Link} to={`/${route}`}>
      <ListItemText primary={text} />
    </ListItem>
  );
}
