import React from 'react';
import { connect } from 'react-redux';
import EducationForm from './EducationForm';

function EducationFormPage(props) {
  const { EducationReducer } = props;
  return <EducationForm education={EducationReducer.education} />;
}

const mapStateToProps = ({ EducationReducer }) => ({
  EducationReducer
});

export default connect(mapStateToProps)(EducationFormPage);
