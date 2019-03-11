/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Typography, withStyles, Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { fetchPending, selectApplication } from '../../../../actions';
import Loader from '../../../loader/Loader';
import ProposalsTable from '../../ProposalsTable';
import SelectedAppplication from './SelectedApplication';
import pageTitle from '../../../../util/pageTitle';
import StatusMessage from '../../StatusMessage';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    maxWidth: '100vw'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  grid: {
    marginTop: 10
  },
  padded: {
    padding: 10
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

class RespondHomePage extends React.Component {
  componentDidMount() {
    this.props.fetchPending();
    pageTitle('Reviews');
  }

  render() {
    const { classes, applications, pending, submission } = this.props;
    if (applications.fetching || pending.fetching) {
      return <Loader />;
    }
    return (
      <div className={classes.root}>
        <Typography variant="h2">Pending Review</Typography>
        <Grid container spacing={16} className={classes.grid}>
          <Grid item xs={12}>
            <ProposalsTable
              columns={[
                {
                  title: 'Title',
                  field: 'title'
                },
                {
                  title: 'Signed',
                  field: 'signed',
                  render: rowData => <div>{rowData.signed ? 'Yes' : 'No'}</div>
                },
                {
                  title: 'Human Statement',
                  field: 'human_statement'
                },
                {
                  title: 'Animal Statement',
                  field: 'animal_statement'
                },
                {
                  title: 'Duration',
                  field: 'duration'
                },
                {
                  title: 'Applicant Country',
                  field: 'applicant_country'
                },
                {
                  title: 'Amount Required',
                  field: 'amount_required',
                  render: rowData => <div>{rowData.amount_required.toLocaleString('en')}</div>
                },
                {
                  title: 'Select Application',
                  render: rowData => (
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      onClick={() => this.props.selectApplication(rowData)}
                    >
                      Select
                    </Button>
                  )
                }
              ]}
              data={applications.applications}
              title="Pending Approval"
              rows
              options={{
                columnsButton: true,
                exportButton: true
              }}
              className={classes.paper}
            />
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={24}>
              <SelectedAppplication classes={classes} />
            </Paper>
          </Grid>
        </Grid>
        {submission.msg.length > 0 && submission.success && (
          <StatusMessage status="success" message={submission.msg} />
        )}
        {!submission.success && submission.msg.length > 0 && (
          <StatusMessage message={submission.msg} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ PendingApplication, FetchApplication, SubmitReviewReducer }) => ({
  pending: PendingApplication,
  applications: FetchApplication,
  submission: SubmitReviewReducer
});

export default connect(
  mapStateToProps,
  { fetchPending, selectApplication }
)(withStyles(styles)(RespondHomePage));
