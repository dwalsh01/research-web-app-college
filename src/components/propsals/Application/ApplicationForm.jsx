import React from 'react';
import { connect } from 'react-redux';
import ProposalApplication from './ProposalApplication';
import StatusMessage from '../StatusMessage';
import { fetchAllDrafts } from '../../../actions';

function PersonalForm(props) {
  const { draftStatus } = props;
  return (
    <div>
      <ProposalApplication />
      {draftStatus.successMsg.length > 0 && draftStatus.error === false && (
        <StatusMessage status="success" message={draftStatus.successMsg} />
      )}
      {draftStatus.error && draftStatus.errorMsg.length > 0 && (
        <StatusMessage message={draftStatus.errorMsg} />
      )}
    </div>
  );
}

const mapStateToProps = ({ proposalDraftReducer }) => ({
  draftStatus: proposalDraftReducer
});

export default connect(
  mapStateToProps,
  { fetchAllDrafts }
)(PersonalForm);
