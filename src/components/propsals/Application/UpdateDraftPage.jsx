import React from 'react';
import { connect } from 'react-redux';
import StatusMessage from '../StatusMessage';
import { fetchAllDrafts } from '../../../actions';
import UpdateDraft from './UpdateDraft';

function UpdateDraftPage(props) {
  const { draftStatus, postStatus } = props;
  return (
    <div>
      <UpdateDraft />
      {draftStatus.successMsg.length > 0 && draftStatus.error === false && (
        <StatusMessage status="success" message={draftStatus.successMsg} />
      )}
      {draftStatus.error && draftStatus.errorMsg.length > 0 && (
        <StatusMessage message={draftStatus.errorMsg} />
      )}
      {postStatus.success && postStatus.msg.length > 0 && (
        <StatusMessage status="success" message={postStatus.msg} />
      )}
      {!postStatus.success && postStatus.msg.length > 0 && (
        <StatusMessage message={postStatus.msg} />
      )}
    </div>
  );
}

const mapStateToProps = ({ proposalDraftReducer, PostApplicationReducer }) => ({
  draftStatus: proposalDraftReducer,
  postStatus: PostApplicationReducer
});

export default connect(
  mapStateToProps,
  { fetchAllDrafts }
)(UpdateDraftPage);
