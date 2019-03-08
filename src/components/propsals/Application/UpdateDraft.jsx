/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import TextField from '@material-ui/core/TextField';
import { withStyles, Typography, Paper, Grid, Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from '../../loader/Loader';
// import FileUpload from './FileUpload';
import ProposalSchema from './ProposalSchema';
import {
  submitApplication,
  submitDraft,
  getFullProposal,
  fetchSpecificDraft,
  resetDraftPost,
  fetchAreas
} from '../../../actions/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  paperInside: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  textFieldName: {
    marginLeft: theme.spacing.unit,
    width: '70%'
  },
  textFieldOther: {
    marginLeft: theme.spacing.unit,
    width: '27.5%'
  },
  formControl: {
    margin: theme.spacing.unit
  },
  inlineFlex: {
    display: 'inline-flex'
  }
});

class UpdateDraft extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    const { match } = this.props;
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => response.data)
      .then(data =>
        this.setState({
          countries: data
        })
      );
    this.props.getFullProposal(match.params.id);
    this.props.fetchSpecificDraft(match.params.id);
    this.props.fetchAreas();
    this.props.resetDraftPost();
  }

  render() {
    const { classes, match, proposal, draft, areas } = this.props;
    const { countries } = this.state;
    const renderAreas = areas.areas.map(area => (
      <MenuItem key={area.nrp_id} value={area.nrp_id}>
        {area.nrp_title}
      </MenuItem>
    ));
    const renderCountries = countries.map(country => (
      <MenuItem key={country.name} value={country.name}>
        {country.name}
      </MenuItem>
    ));
    if (countries.length === 0 || proposal.isFetching || draft.fetching || areas.fetching) {
      return <Loader />;
    }
    return (
      <div className={classes.root}>
        <Typography variant="h2" style={{ padding: 20 }}>
          Proposal Application
        </Typography>

        <Formik
          initialValues={draft.formData}
          validationSchema={ProposalSchema}
          onSubmit={(values, { setSubmitting }) => {
            const submitObj = { id: this.props.match.params.id, data: { ...values } };
            this.props.submitApplication(submitObj);
            setSubmitting(false);
          }}
        >
          {({
            isValid,
            errors,
            handleChange,
            values,
            isSubmitting,
            touched,
            handleBlur,
            handleReset
          }) => (
            <Form className={classes.container}>
              <Grid container spacing={24}>
                <Grid item xs={4}>
                  <Paper elevation={24} className={classes.paper}>
                    <Button
                      className={classes.button}
                      variant="outlined"
                      color="primary"
                      fullWidth
                      onClick={() => {
                        const clone = values;
                        delete clone.files;
                        clone.id = match.params.id;
                        this.props.submitDraft(clone);
                      }}
                    >
                      Save Draft
                    </Button>

                    <Button
                      className={classes.button}
                      variant="contained"
                      onClick={handleReset}
                      fullWidth
                    >
                      Reset Form
                    </Button>
                    <Button
                      className={classes.button}
                      type="submit"
                      color="secondary"
                      variant="contained"
                      fullWidth
                      disabled={!isValid || isSubmitting}
                    >
                      Submit
                    </Button>
                  </Paper>
                </Grid>
                <Grid item xs={8}>
                  <Paper elevation={24} className={classes.paperInside}>
                    <TextField
                      helperText={touched.title ? errors.title : ''}
                      error={touched.title && Boolean(errors.title)}
                      id="title"
                      name="title"
                      label="Title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                    />
                    <TextField
                      helperText={touched.duration ? errors.duration : ''}
                      error={touched.duration && Boolean(errors.duration)}
                      id="duration"
                      name="duration"
                      label="Duration (in months)"
                      value={values.duration}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      margin="normal"
                      variant="outlined"
                      type="number"
                      className={classes.textField}
                      fullWidth
                    />
                    <TextField
                      helperText={touched.proposal_legal_remit ? errors.proposal_legal_remit : ''}
                      error={touched.proposal_legal_remit && Boolean(errors.proposal_legal_remit)}
                      id="proposal_legal_remit"
                      name="proposal_legal_remit"
                      label="Describe how your proposal is aligned with SFI Legal remit (250 Words)"
                      value={values.proposal_legal_remit}
                      multiline
                      rows={8}
                      rowsMax={10}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      margin="normal"
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                    />
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="ethicalAnimals">Research include animal use?</InputLabel>
                      <Select
                        value={values.ethicalAnimals}
                        onChange={handleChange('ethicalAnimals')}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="true">Yes</MenuItem>
                        <MenuItem value="false">No</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="ethicalMaterials">
                        Research include human participants, biological material, or identifiable
                        data?
                      </InputLabel>
                      <Select
                        value={values.ethicalMaterials}
                        onChange={handleChange('ethicalMaterials')}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="true">Yes</MenuItem>
                        <MenuItem value="false">No</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="country">Country</InputLabel>
                      <Select value={values.country} onChange={handleChange('country')}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {renderCountries}
                      </Select>
                    </FormControl>

                    <FormControl className={classes.formControl} fullWidth>
                      <InputLabel htmlFor="nprArea">National Research Priority Area</InputLabel>
                      <Select value={values.nprArea} onChange={handleChange('nprArea')}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {renderAreas}
                      </Select>
                    </FormControl>

                    <FieldArray
                      name="coApplicants"
                      render={arrayHelpers => (
                        <Paper
                          elevation={1}
                          className={classes.paper}
                          style={{ textAlign: 'left', marginTop: 20 }}
                        >
                          <Typography variant="h4" style={{ padding: 10 }}>
                            Co-Applicants
                          </Typography>
                          {values.coApplicants.map((person, index) => (
                            <div key={index} style={{ display: 'inline-flex' }}>
                              <TextField
                                // TODO: NESTED CONDITIONAL HERE
                                name={`coApplicants[${index}].email`}
                                label="Email"
                                value={values.coApplicants[index].email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                className={classes.textField}
                              />
                              <Button
                                color="secondary"
                                variant="contained"
                                className={classes.button}
                                style={{ display: 'inline', minWidth: '500' }}
                                onClick={() => {
                                  arrayHelpers.remove(index);
                                }}
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                          <div style={{ display: 'block' }}>
                            <Button
                              variant="contained"
                              className={classes.button}
                              style={{ display: 'inline', minWidth: '500' }}
                              onClick={() => {
                                arrayHelpers.push({ email: '' });
                              }}
                            >
                              Add New Co-Applicant
                            </Button>
                          </div>
                        </Paper>
                      )}
                    />

                    <FieldArray
                      name="collaborators"
                      render={arrayHelpers => (
                        <Paper
                          elevation={1}
                          className={classes.paper}
                          style={{ textAlign: 'left', marginTop: 20 }}
                        >
                          <Typography variant="h4" style={{ padding: 10 }}>
                            Collaborators
                          </Typography>
                          {values.collaborators.map((person, index) => (
                            <Card
                              elevation={0}
                              className={classes.paper}
                              key={index}
                              style={{ display: 'inline-flex', marginTop: 5 }}
                            >
                              <TextField
                                name={`collaborators[${index}].name`}
                                label="Name"
                                value={values.collaborators[index].name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                className={classes.textField}
                              />
                              <TextField
                                name={`collaborators[${index}].email`}
                                label="Email"
                                value={values.collaborators[index].email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                className={classes.textField}
                              />
                              <TextField
                                name={`collaborators[${index}].org`}
                                label="Organisation"
                                value={values.collaborators[index].org}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                margin="normal"
                                variant="outlined"
                                className={classes.textField}
                              />
                              <Button
                                color="secondary"
                                variant="contained"
                                className={classes.button}
                                style={{ display: 'inline', minWidth: '500' }}
                                onClick={() => {
                                  arrayHelpers.remove(index);
                                }}
                              >
                                Remove
                              </Button>
                            </Card>
                          ))}
                          <div style={{ display: 'block' }}>
                            <Button
                              variant="contained"
                              className={classes.button}
                              style={{ display: 'inline', minWidth: '500' }}
                              onClick={() => arrayHelpers.push({ name: '', email: '', org: '' })}
                            >
                              Add New Collaborator
                            </Button>
                          </div>
                        </Paper>
                      )}
                    />
                    <TextField
                      helperText={touched.scientificAbstract ? errors.scientificAbstract : ''}
                      error={touched.scientificAbstract && Boolean(errors.scientificAbstract)}
                      id="scientificAbstract"
                      name="scientificAbstract"
                      label="Scientific Abstract (200 Words)"
                      value={values.scientificAbstract}
                      multiline
                      rows={8}
                      rowsMax={10}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      margin="normal"
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                    />
                    <TextField
                      helperText={touched.layAbstract ? errors.layAbstract : ''}
                      error={touched.layAbstract && Boolean(errors.layAbstract)}
                      id="layAbstract"
                      name="layAbstract"
                      label="Lay Abstract (100 Words)"
                      value={values.layAbstract}
                      multiline
                      rows={8}
                      rowsMax={10}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      margin="normal"
                      variant="outlined"
                      className={classes.textField}
                      fullWidth
                    />
                    {/* <FileUpload
                      id="files"
                      name="files"
                      fileList={values.files}
                      onChange={uploadedFiles => {
                        setFieldValue('files', uploadedFiles);
                      }}
                    /> */}
                  </Paper>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
const mapStateToProps = ({ proposalReducer, SpecificDraftReducer, AreasReducer }) => ({
  proposal: proposalReducer,
  draft: SpecificDraftReducer,
  areas: AreasReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      submitDraft,
      getFullProposal,
      fetchSpecificDraft,
      resetDraftPost,
      fetchAreas,
      submitApplication
    }
  )(withStyles(styles)(UpdateDraft))
);
