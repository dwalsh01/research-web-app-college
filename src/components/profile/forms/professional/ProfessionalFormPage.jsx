import React from 'react';
import { withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import JobForm from './JobForm';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});
const ProfessionalForm = props => {
  const { currentUserReducer } = props;
  return <JobForm />;
};
const mapStateToProps = ({ currentUserReducer }) => ({
  currentUserReducer
});

export default connect(mapStateToProps)(withStyles(styles)(ProfessionalForm));
