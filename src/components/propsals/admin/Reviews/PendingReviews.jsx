import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { fetchReviews } from '../../../../actions';
import Loader from '../../../loader/Loader';
// import ProposalsTable from '../../ProposalsTable';

class PendingReviews extends React.Component {
  componentDidMount() {
    this.props.fetchReviews();
  }

  render() {
    const { FetchReviews, FetchApplication } = this.props;
    if (FetchReviews.fetching || FetchApplication.fetching) {
      return <Loader />;
    }
    return (
      <div style={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography variant="h2">Pending Reviews</Typography>
      </div>
    );
  }
}

const mapStateToProps = ({ FetchReviews, FetchApplication }) => ({
  FetchReviews,
  FetchApplication
});

export default connect(
  mapStateToProps,
  { fetchReviews }
)(PendingReviews);
