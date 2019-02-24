import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  root: {
    flexGrow: 1
  }
};

function Loader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress />
    </div>
  );
}

export default withStyles(styles)(Loader);
