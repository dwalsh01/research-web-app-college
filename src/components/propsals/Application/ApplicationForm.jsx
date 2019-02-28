import React from 'react';
import { connect } from 'react-redux';
import ProposalApplication from './ProposalApplication';

const PersonalForm = () => <ProposalApplication />;
const mapStateToProps = ({ proposalReducer }) => ({
  proposalReducer
});

export default connect(mapStateToProps)(PersonalForm);
