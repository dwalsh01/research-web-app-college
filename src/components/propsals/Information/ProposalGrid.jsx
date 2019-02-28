import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import checkDate from '../../../util/checkDate';
import ProposalLeftGrid from './ProposalLeftGrid';
import ProposalRightGrid from './ProposalRightGrid';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  title: {
    textAlign: 'center'
  },
  header: {
    padding: '10px'
  },
  leftSide: {
    padding: '1px'
  },
  padded: {
    padding: '15px'
  }
});

function ProposalGrid({ classes, proposal }) {
  const isBeforeToday = checkDate(proposal.start_date);
  const now = moment('20201010');
  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.title}>
            {proposal.title}
          </Typography>
          <Typography variant="subheading" className={classes.title}>
            {proposal.short_text}
          </Typography>
        </Grid>
        <ProposalLeftGrid classes={classes} proposal={proposal} isBeforeToday={isBeforeToday} />
        <ProposalRightGrid
          classes={classes}
          proposal={proposal}
          time={now.format('MMMM Do YYYY, h:mm:ss a')}
          fromNow={moment(now, 'YYYYMMDD').fromNow()}
        />
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ProposalGrid);
