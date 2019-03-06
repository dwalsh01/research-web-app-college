import React from 'react';
import { connect } from 'react-redux';
import StatusMessage from '../StatusMessage';
import { fetchAllDrafts } from '../../../actions';
import UpdateDraft from './UpdateDraft';

function UpdateDraftPage(props) {
  const { draftStatus } = props;
  return (
    <div>
      <UpdateDraft />
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
)(UpdateDraftPage);
