import React from 'react';
import { connect } from 'react-redux';
import ProposalApplication from './ProposalApplication';
import StatusMessage from '../StatusMessage';
import { fetchAllDrafts, resetDeleteDraft } from '../../../actions';

class PersonalForm extends React.Component {
  componentDidMount() {
    this.props.resetDeleteDraft();
  }

  render() {
    const { draftStatus, postStatus } = this.props;
    return (
      <div>
        <ProposalApplication />
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
}

const mapStateToProps = ({ proposalDraftReducer, PostApplicationReducer }) => ({
  draftStatus: proposalDraftReducer,
  postStatus: PostApplicationReducer
});

export default connect(
  mapStateToProps,
  { fetchAllDrafts, resetDeleteDraft }
)(PersonalForm);
