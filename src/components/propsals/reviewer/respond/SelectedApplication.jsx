/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Paper } from '@material-ui/core';
import RespondForm from './form/RespondForm';

function SelectedAppplication(props) {
  const { selected, classes } = props;
  const { application } = selected;
  return (
    <div>
      {application ? (
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} lg={6}>
            <Paper elevation={0} className={classes.paper}>
              <Paper className={classes.paper} elevation={2}>
                <RespondForm application={application} />
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Paper elevation={0} className={classes.paper}>
              <Paper className={classes.paper} elevation={2}>
                <Typography variant="h5">Application Information</Typography>
                <Grid container spacing={0} style={{ paddingTop: 10 }}>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="h6">Title:</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="body1">{application.title}</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="h6">Signed:</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="body1">
                      {application.signed ? 'Signed' : 'Not Signed'}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="h6">Human Participation:</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="body1">{application.human_statement}</Typography>
                  </Grid>

                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="h6">Animal Participation:</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="body1">{application.animal_statement}</Typography>
                  </Grid>

                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="h6">Duration:</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="body1">{application.duration} months</Typography>
                  </Grid>

                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="h6">Lay Abstract:</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="body1">{application.lay_abstract}</Typography>
                  </Grid>

                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="h6">Text:</Typography>
                  </Grid>
                  <Grid item xs={6} className={props.classes.padded}>
                    <Typography variant="body1">{application.textbox}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </div>
  );
}
const mapStateToProps = ({ SelectApplication, SubmitReviewReducer }) => ({
  selected: SelectApplication,
  submitReview: SubmitReviewReducer
});

export default connect(mapStateToProps)(SelectedAppplication);
