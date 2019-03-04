/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Grid, withStyles, Typography } from '@material-ui/core';
import { red, green, yellow } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import pageTitle from '../../../util/pageTitle';
import DashboardItem from './dashboardItem';
import { fetchAllDrafts } from '../../../actions';
import Loader from '../../loader/Loader';

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
  statusTextSuccess: {
    padding: 2,
    marginBottom: 12,
    marginTop: 12,
    color: green[900],
    backgroundColor: green[200],
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
    pageTitle('Drafts Dashboard');
    this.props.fetchAllDrafts();
  }

  render() {
    const { classes, Alldrafts } = this.props;
    const { fetching, error, errorMsg, drafts, message } = Alldrafts;
    const renderDrafts = drafts.map(draft => (
      <Grid key={draft.id} item xs={12} sm={6} lg={4}>
        <DashboardItem draft={draft.draft.formData} {...this.props} />
      </Grid>
    ));
    if (fetching) {
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
          {renderDrafts}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ AllDraftsReducer }) => ({
  Alldrafts: AllDraftsReducer
});

export default connect(
  mapStateToProps,
  { fetchAllDrafts }
)(withStyles(styles)(draftDashboard));
