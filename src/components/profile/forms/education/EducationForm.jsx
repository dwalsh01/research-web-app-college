import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import formatDate from '../../../../util/formatDate';
import { postEducation } from '../../../../actions';

const EducationSchema = Yup.object().shape({
  degree: Yup.string(),
  field_of_study: Yup.string(),
  institution: Yup.string(),
  location: Yup.string(),
  year_degree_award: Yup.date().required('Required!')
});

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: '10px',
    width: '100%'
  }
});

const EducationForm = ({ education, ...props }) => {
  console.log(education);
  return (
    <div>
      <h1>Education Information</h1>
      <Formik
        initialValues={education}
        validationSchema={EducationSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.postEducation(values);
          setSubmitting(false);
        }}
      >
        {({ isValid, errors, handleChange, values, isSubmitting, touched }) => (
          <Form className={props.classes.container}>
            <TextField
              helperText={touched.degree ? errors.degree : ''}
              error={touched.degree && Boolean(errors.degree)}
              id="degree"
              name="degree"
              label="Degree"
              value={values.degree}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              fullWidth
              className={props.classes.textField}
            />
            <TextField
              helperText={touched.field_of_study ? errors.field_of_study : ''}
              error={touched.field_of_study && Boolean(errors.field_of_study)}
              id="field_of_study"
              name="field_of_study"
              label="Field Of Study"
              value={values.field_of_study}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              className={props.classes.textField}
            />
            <TextField
              helperText={touched.institution ? errors.institution : ''}
              error={touched.institution && Boolean(errors.institution)}
              id="institution"
              name="institution"
              label="Institution"
              value={values.institution}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              className={props.classes.textField}
            />

            <TextField
              helperText={touched.location ? errors.location : ''}
              error={touched.location && Boolean(errors.location)}
              id="location"
              name="location"
              label="Location"
              value={values.location}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              className={props.classes.textField}
            />
            <TextField
              helperText={touched.year_degree_award ? errors.year_degree_award : ''}
              error={touched.year_degree_award && Boolean(errors.year_degree_award)}
              id="year_degree_award"
              name="year_degree_award"
              label="Year Degree Awarded"
              type="date"
              value={formatDate(new Date(values.year_degree_award))}
              // defaultValue={formatDate(values.year_degree_award)}
              className={props.classes.textField}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true
              }}
              style={{ width: 225 }}
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
};

export default connect(
  null,
  { postEducation }
)(withStyles(styles)(EducationForm));
