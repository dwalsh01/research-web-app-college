import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './HomePageCard';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

const GuttersGrid = props => {
  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid key={1} item xs={6}>
        <SimpleCard title="Hello World" />
      </Grid>
      <Grid key={2} item xs={6}>
        <SimpleCard title="Hello World" />
      </Grid>
      <Grid key={3} item xs={6}>
        <SimpleCard title="Hello World" />
      </Grid>
      <Grid key={4} item xs={6}>
        <SimpleCard title="Hello World" />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(GuttersGrid);
