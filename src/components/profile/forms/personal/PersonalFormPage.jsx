import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import UserForm from './UserForm';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});
const PersonalForm = props => {
  const { currentUserReducer } = props;
  return <UserForm user={currentUserReducer.user} />;
};
const mapStateToProps = ({ currentUserReducer }) => ({
  currentUserReducer
});

export default connect(mapStateToProps)(withStyles(styles)(PersonalForm));
