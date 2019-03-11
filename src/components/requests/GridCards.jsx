import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import pageTitle from '../../util/pageTitle';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
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
    <div className={classes.root}> 
      <Typography variant="h2">Welcome to the SFI Research Application!</Typography>
      <Typography variant="h6" style={{margin: 25, padding: 50}}>
        To get started please select the menu icon in the top left of the screen
      </Typography>

    </div>
  );
};

export default withStyles(styles)(GridCards);
