import React from 'react';
import { connect } from 'react-redux';
import EducationForm from './EducationForm';
import StatusMessage from '../../../propsals/StatusMessage';

function EducationFormPage(props) {
  const { EducationReducer, PostEducationReducer } = props;
  return (
    <div>
      <EducationForm education={EducationReducer.education} />
      {PostEducationReducer.success === true && (
        <StatusMessage status="success" message="sucessfully updated data!" />
      )}
      {PostEducationReducer.error === true && (
        <StatusMessage message="error updating data, please try again!" />
      )}
    </div>
  );
}

const mapStateToProps = ({ EducationReducer, PostEducationReducer }) => ({
  EducationReducer,
  PostEducationReducer
});

export default connect(mapStateToProps)(EducationFormPage);
