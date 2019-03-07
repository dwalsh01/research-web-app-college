import React from 'react';
import { withStyles, Typography } from '@material-ui/core';
import AddProposalForm from './AddProposalForm';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  paperInside: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  textFieldName: {
    marginLeft: theme.spacing.unit,
    width: '70%'
  },
  textFieldOther: {
    marginLeft: theme.spacing.unit,
    width: '27.5%'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  inlineFlex: {
    display: 'inline-flex'
  }
});

function AppProposalPage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h2" style={{ padding: 20 }}>
        Proposal Application
      </Typography>
      <AddProposalForm {...props} />
    </div>
  );
}

export default withStyles(styles)(AppProposalPage);
