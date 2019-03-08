import React from 'react';
import { withStyles } from '@material-ui/core';
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
    maxWidth: 850,
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  margin: {
    margin: theme.spacing.unit
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginBottom: '10px'
  }
});

function AppProposalPage(props) {
  return (
    <div>
      <AddProposalForm {...props} />
    </div>
  );
}

export default withStyles(styles)(AppProposalPage);
