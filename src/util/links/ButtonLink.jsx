import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const MyLink = props => <Link to={`/proposals/apply/${props.id}`} {...props} />;

export default function ButtonLink({ to, text = 'Read More' }) {
  return (
    <Button color="primary" component={props => <MyLink id={to} {...props} />}>
      {text}
    </Button>
  );
}
