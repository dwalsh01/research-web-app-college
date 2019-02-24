import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Route } from 'react-router-dom';
import PersonalForm from './forms/personal/PersonalFormPage';
import pageTitle from '../../util/pageTitle';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

const Test2 = () => <h1>Test2</h1>;

function ProfileGrid({ classes, profileCard }) {
  pageTitle('Profile');
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={4}>
          {profileCard}
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Route path="/profile/personal" component={PersonalForm} />
            <Route path="/profile/professional" component={Test2} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ProfileGrid);