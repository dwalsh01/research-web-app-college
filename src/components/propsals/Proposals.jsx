import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { green, red } from '@material-ui/core/colors';
import pageTitle from '../../util/pageTitle';
import { getProposals } from '../../actions/index';
import Loader from '../loader/Loader';
import ProposalsTable from './ProposalsTable';
import formatDate from '../../util/formatDate';

const MyLink = props => <Link to={`/proposals/${props.id}`} {...props} />;

// TODO: grant application information NRP = DROPDOWN BRIEF 3
const Cols = [
  { title: 'Title', field: 'title' },
  { title: 'Short Text', field: 'short_text' },
  {
    title: 'Deadline',
    field: 'deadline_text',
    cellStyle: data => {
      const compare = new Date(data);
      const now = new Date();
      if (compare.getTime() >= now.getTime()) {
        return {
          color: red[500]
        };
      }
      return {
        color: green[500]
      };
    }
  },
  {
    title: 'Deadline Time',
    field: 'deadline_time',
    render: rowData => <div>{formatDate(rowData.deadline_time)}</div>
    // cellStyle: data => {
    //   const compare = new Date(formatDate(data));
    //   const now = new Date();
    //   if (compare.getTime() >= now.getTime()) {
    //     return {
    //       color: red[500]
    //     };
    //   }
    //   return {
    //     color: green[500]
    //   };
    // }
  },
  {
    title: 'Award Amount (€)',
    cellStyle: { fontWeight: 'bold' },
    render: rowData => `€ ${rowData.award_amount}`
  },
  {
    title: 'See More Information',
    render: rowData => (
      <Button
        color="primary"
        variant="contained"
        component={props => <MyLink id={rowData.id} {...props} />}
      >
        Read More
      </Button>
    )
  }
];
class Proposals extends React.Component {
  componentDidMount() {
    const { AllProposals } = this.props;
    pageTitle('Proposals');
    if (AllProposals.proposals.length === 0) {
      this.props.getProposals();
    }
  }

  render() {
    const { AllProposals } = this.props;
    if (AllProposals.isFetching) {
      return <Loader />;
    }
    return (
      <div>
        <ProposalsTable
          columns={Cols}
          data={AllProposals.proposals}
          title="Proposals"
          rows
          options={{
            columnsButton: true,
            exportButton: true
          }}
        />
      </div>
    );
  }
}
const mapStateToProps = ({ AllProposals }) => ({
  AllProposals
});

export default connect(
  mapStateToProps,
  { getProposals }
)(Proposals);
