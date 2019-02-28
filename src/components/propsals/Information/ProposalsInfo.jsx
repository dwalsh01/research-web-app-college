import React from 'react';
import { connect } from 'react-redux';
import pageTitle from '../../../util/pageTitle';
import Loader from '../../loader/Loader';
import { getFullProposal } from '../../../actions/index';
import ProposalGrid from './ProposalGrid';

class ProposalsInfo extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getFullProposal(match.params.id);
  }

  componentDidUpdate() {
    const { proposalReducer } = this.props;
    const { proposal } = proposalReducer;
    if (Object.prototype.hasOwnProperty.call(proposal, 'title')) {
      pageTitle(proposal.title);
    } else {
      pageTitle('Proposal');
    }
  }

  render() {
    const { proposalReducer } = this.props;
    const { isFetching, proposal } = proposalReducer;
    if (isFetching) {
      return <Loader />;
    }
    return (
      <div>
        <ProposalGrid proposal={proposal} />
      </div>
    );
  }
}

const mapStateToProps = ({ proposalReducer }) => ({ proposalReducer });

export default connect(
  mapStateToProps,
  { getFullProposal }
)(ProposalsInfo);
