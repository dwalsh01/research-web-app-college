import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import ErrorContentWrapper from '../login/ErrorWrapper';

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

const StatusMessage = ({ classes, message, status }) => (
  <div>
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open
      autoHideDuration={6000}
    >
      <ErrorContentWrapper
        variant={status === 'success' ? 'success' : 'error'}
        className={classes.margin}
        message={message}
      />
    </Snackbar>
  </div>
);

export default withStyles(styles2)(StatusMessage);
