import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';

const styles = {
  card: {
    minWidth: 250,
    minHeight: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

export const ICONS = {
  PENDING: 'autorenew',
  ACCEPTED: 'check_circle',
  REJECTED: 'warning',
  SUBMIT: 'assignment'
};

const RequestCard = ({ title, titleIcon, text, classes, children }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        style={{ display: 'inline-flex', verticalAlign: 'middle' }}
      >
        <Icon style={{ height: 30 }}>{titleIcon || ''}</Icon>
        <div style={{ height: 30 }}>{title}</div>
      </Typography>
      <Typography paragraph>{text}</Typography>
      {children}
    </CardContent>
  </Card>
);

export default withStyles(styles)(RequestCard);
