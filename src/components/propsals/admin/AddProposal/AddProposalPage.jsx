import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import AddProposalForm from './AddProposalForm';
import StatusMessage from '../../StatusMessage';

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
  const { createStatus } = props;
  return (
    <div>
      <AddProposalForm {...props} />
      {createStatus.success && createStatus.msg.length > 0 && (
        <StatusMessage status="success" message={createStatus.msg} />
      )}
      {!createStatus.success && createStatus.msg.length > 0 && (
        <StatusMessage message={createStatus.msg} />
      )}
    </div>
  );
}

const mapStateToProps = ({ createApplicationReducer }) => ({
  createStatus: createApplicationReducer
});

export default connect(mapStateToProps)(withStyles(styles)(AppProposalPage));
