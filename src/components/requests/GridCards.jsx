import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RequestCard, { ICONS } from './RequestCard';
import RequestsTable from './RequestsTable';
import pageTitle from '../../util/pageTitle';

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

const GridCards = props => {
  pageTitle('Home');
  const { classes } = props;

  return (
    <Grid container className={classes.root} spacing={16}>
      <Grid item xs={12} sm={12} lg={6}>
        <RequestCard
          title="Accepted Requests"
          titleIcon={ICONS.ACCEPTED}
          text="View of accepted requests"
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
        <RequestCard
          title="Pending Requests"
          titleIcon={ICONS.PENDING}
          text="View of pending requests"
        >
          <RequestsTable />
        </RequestCard>
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
        <RequestCard
          title="Rejected Requests"
          titleIcon={ICONS.REJECTED}
          text="View of rejected requests"
        >
          <RequestsTable />
        </RequestCard>
      </Grid>
      <Grid item xs={12} sm={12} lg={6}>
        <RequestCard title="Submit Requests" titleIcon={ICONS.SUBMIT} text="Submit Request" />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(GridCards);
