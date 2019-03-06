/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import { red, yellow } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import pageTitle from '../../../util/pageTitle';
import DashboardItem from './dashboardItem';
import { fetchAllDrafts, getProposals, resetDeleteDraft } from '../../../actions';
import Loader from '../../loader/Loader';
import DeleteNotification from './DeleteNotification';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  statusTextRejected: {
    padding: 2,
    marginBottom: 12,
    marginTop: 12,
    color: red[900],
    backgroundColor: red[200],
    textAlign: 'center'
  },
  statusText: {
    fontSize: 20,
    fontWeight: 300,
    padding: 2,
    marginBottom: 12,
    marginTop: 12,
    // color: green[900],
    // backgroundColor: green[200],
    textAlign: 'center'
  },
  statusTextPending: {
    padding: 2,
    marginBottom: 12,
    marginTop: 12,
    color: yellow[900],
    backgroundColor: yellow[200],
    textAlign: 'center'
  },
  pos2: {
    marginBottom: 12,
    marginTop: 12
  },
  header: {
    padding: 10,
    margin: 'auto',
    textAlign: 'center'
  },
  link: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20,
    textDecoration: 'none',
    // -webkit-transition: 'border-color 0.1s ease-in',
    transition: 'border-color 0.1s ease-in'
  },
  actualLink: {
    color: '#3f51b5',
    marginLeft: 5,
    paddingBottom: 1,
    textDecoration: ' none',
    borderBottom: '1px solid #3f51b5',

    transition: 'border-color 0.1s ease-in'
  }
});
class draftDashboard extends React.Component {
  componentDidMount() {
    const { proposals } = this.props;
    pageTitle('Drafts Dashboard');
    this.props.fetchAllDrafts();
    if (proposals.proposals.length === 0) {
      this.props.getProposals();
    }
    this.props.resetDeleteDraft();
  }

  render() {
    const { classes, Alldrafts, proposals, deleteStatus } = this.props;
    const { fetching, error, errorMsg, drafts, message } = Alldrafts;
    const sortedRender = drafts
      .sort(({ id: previousID }, { id: currentID }) => currentID - previousID)
      .map(draft => (
        <Grid key={draft.id} item xs={12} sm={6} lg={4}>
          <DashboardItem id={draft.id} draft={draft.draft.formData} {...this.props} />
        </Grid>
      ));
    if (fetching || proposals.isFetching) {
      return <Loader />;
    }
    if (error) {
      return <h1>{errorMsg}</h1>;
    }
    if (message.length > 0) {
      return (
        <div className={classes.root}>
          <Typography variant="h2" className={classes.header}>
            You currently have no drafts!
          </Typography>
          <Typography variant="subtitle1" className={classes.link}>
            View all the{' '}
            <Link to="/proposals/all" className={classes.actualLink}>
              proposals
            </Link>{' '}
            to start your first draft!
          </Typography>
        </div>
      );
    }
    return (
      <div className={classes.root}>
        <Typography variant="h2" className={classes.header}>
          Your Drafts
        </Typography>
        <Grid container spacing={24}>
          {sortedRender}
        </Grid>
        {deleteStatus.success && <DeleteNotification message={deleteStatus.message} />}
        {deleteStatus.error && <DeleteNotification message={deleteStatus.message} />}
      </div>
    );
  }
}

const mapStateToProps = ({ AllDraftsReducer, AllProposals, DeleteDraftReducer }) => ({
  Alldrafts: AllDraftsReducer,
  proposals: AllProposals,
  deleteStatus: DeleteDraftReducer
});

export default connect(
  mapStateToProps,
  { fetchAllDrafts, getProposals, resetDeleteDraft }
)(withStyles(styles)(draftDashboard));
