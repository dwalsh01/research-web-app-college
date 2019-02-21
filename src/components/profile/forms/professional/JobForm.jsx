import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

const styles = theme => ({
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
  }
});
const JobForm = ({ jobInfo, ...props }) => (
  <div>
    <h1>Personal Information</h1>
    <Formik
      initialValues={jobInfo}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isValid, errors, handleChange, values, isSubmitting }) => (
        <Form className={props.classes.container}>
          <TextField
            helperText={errors.email || ''}
            error={Boolean(errors.email)}
            id="email"
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disabled={!isValid || isSubmitting}
            fullWidth
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default withStyles(styles)(JobForm);
