import React from 'react';
import { Formik, Form } from 'formik';
import { withRouter } from 'react-router-dom';
import { Paper, TextField, Typography, Input, InputAdornment } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import formatDate from '../../../../util/formatDate';
import pageTitle from '../../../../util/pageTitle';
import { addApplication } from '../../../../actions/index';

const AppProposalSchema = Yup.object().shape({
  deadline_text: Yup.string().required('Required!'),
  deadline_time: Yup.date().required('Required!'),
  award_amount: Yup.number().required('Required!'),
  title: Yup.string().required('Required!'),
  short_text: Yup.string().required('Required!'),
  text_description: Yup.string().required('Required!'),
  target_audience: Yup.string().required('Required!'),
  eligibil_text: Yup.string().required('Required!'),
  duration: Yup.string().required('Required!'),
  report_guidelines: Yup.string().required('Required!'),
  start_date: Yup.date().required('Required!'),
  start_date_end: Yup.date().required('Required!'),
  contact: Yup.string()
    .email()
    .required('Email Required!')
});

function AddProposalForm(props) {
  pageTitle('Add Proposal');
  const { classes } = props;
  const now = new Date().getTime();
  return (
    <div className={classes.root}>
      <Typography variant="h2" style={{ padding: 20 }}>
        Create A Proposal
      </Typography>
      <Formik
        initialValues={{
          deadline_text: '',
          deadline_time: now,
          award_amount: 10000,
          // amount_left: 10000,
          title: '',
          short_text: '',
          text_description: '',
          target_audience: '',
          eligibil_text: '',
          duration: '',
          report_guidelines: '',
          start_date: now,
          start_date_end: now,
          contact: ''
        }}
        validationSchema={AppProposalSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.addApplication(values);
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
          handleReset,
          setFieldValue
        }) => (
          <Form className={classes.container}>
            <Paper elevation={24} className={classes.paper}>
              {/* <FileUpload
                id="files"
                name="files"
                fileList={values.files}
                onChange={uploadedFiles => {
                  setFieldValue('files', uploadedFiles);
                }}
              /> */}
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
                helperText={touched.short_text ? errors.short_text : ''}
                error={touched.short_text && Boolean(errors.short_text)}
                id="short_text"
                name="short_text"
                label="Short Text"
                multiline
                rows={8}
                rowsMax={20}
                value={values.short_text}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                helperText={touched.text_description ? errors.text_description : ''}
                error={touched.text_description && Boolean(errors.text_description)}
                id="text_description"
                name="text_description"
                label="Text Description"
                multiline
                rows={8}
                rowsMax={20}
                value={values.text_description}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />

              <TextField
                helperText={touched.deadline_text ? errors.deadline_text : ''}
                error={touched.deadline_text && Boolean(errors.deadline_text)}
                id="deadline_text"
                name="deadline_text"
                label="Deadline (Rolling/Date)"
                value={values.deadline_text}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />

              <TextField
                helperText={touched.eligibil_text ? errors.eligibil_text : ''}
                error={touched.eligibil_text && Boolean(errors.eligibil_text)}
                id="eligibil_text"
                name="eligibil_text"
                label="Eligible To Apply"
                value={values.eligibil_text}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                helperText={touched.target_audience ? errors.target_audience : ''}
                error={touched.target_audience && Boolean(errors.target_audience)}
                id="target_audience"
                name="target_audience"
                label="Target Audience"
                value={values.target_audience}
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
                label="Duration"
                value={values.duration}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                helperText={touched.report_guidelines ? errors.report_guidelines : ''}
                error={touched.report_guidelines && Boolean(errors.report_guidelines)}
                id="report_guidelines"
                name="report_guidelines"
                label="Report Guidelines"
                multiline
                rows={8}
                rowsMax={20}
                value={values.report_guidelines}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />
              <TextField
                helperText={touched.contact ? errors.contact : ''}
                error={touched.contact && Boolean(errors.contact)}
                id="contact"
                name="contact"
                label="Contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                className={classes.textField}
                fullWidth
              />

              <FormControl fullWidth>
                <InputLabel htmlFor="award_amount">Amount</InputLabel>
                <Input
                  error={touched.award_amount && Boolean(errors.award_amount)}
                  id="award_amount"
                  name="award_amount"
                  label="Award Amount"
                  type="number"
                  value={values.award_amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  startAdornment={<InputAdornment position="start">€</InputAdornment>}
                />
              </FormControl>
              <TextField
                helperText={touched.deadline_time ? errors.deadline_time : ''}
                error={touched.deadline_time && Boolean(errors.deadline_time)}
                id="deadline_time"
                name="deadline_time"
                label="Deadline Date"
                type="date"
                value={formatDate(new Date(values.deadline_time))}
                className={classes.textField}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                style={{ width: '100%', float: 'left', marginTop: 15 }}
              />
              <TextField
                helperText={touched.start_date ? errors.start_date : ''}
                error={touched.start_date && Boolean(errors.start_date)}
                id="start_date"
                name="start_date"
                label="Start Date"
                type="date"
                value={formatDate(new Date(values.start_date))}
                className={classes.textField}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                style={{ width: '50%', float: 'left', marginTop: 15, display: 'inline-flex' }}
              />
              <TextField
                helperText={touched.start_date_end ? errors.start_date_end : ''}
                error={touched.start_date_end && Boolean(errors.start_date_end)}
                id="start_date_end"
                name="start_date_end"
                label="Application End Date"
                type="date"
                value={formatDate(new Date(values.start_date_end))}
                className={classes.textField}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                style={{ width: '50%', float: 'right', marginTop: 15, display: 'inline-flex' }}
              />

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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(
  null,
  { addApplication }
)(withRouter(AddProposalForm));
