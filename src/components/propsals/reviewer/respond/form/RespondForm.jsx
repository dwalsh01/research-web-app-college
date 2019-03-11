import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import { withStyles, Typography, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { connect } from 'react-redux';
import { submitReview } from '../../../../../actions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit
  }
});

const RespondForm = props => (
  <div>
    <Typography variant="h5">Review Form</Typography>
    <Formik
      initialValues={{
        impact: '',
        relevance: '',
        quality: '',
        importance: '',
        rating: 0
      }}
      onSubmit={(values, { setSubmitting }) => {
        const clone = values;
        const { id } = props.application;
        clone.app_id = id;
        console.log(clone);
        props.submitReview(clone);
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
        <Form className={props.classes.container}>
          <TextField
            helperText={touched.impact ? errors.impact : ''}
            error={touched.impact && Boolean(errors.impact)}
            id="impact"
            name="impact"
            label="Potential Impact"
            multiline
            rows={8}
            rowsMax={10}
            value={values.impact}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />
          <TextField
            helperText={touched.relevance ? errors.relevance : ''}
            error={touched.relevance && Boolean(errors.relevance)}
            multiline
            rows={8}
            rowsMax={10}
            id="relevance"
            name="relevance"
            label="Relevance to NRP"
            value={values.relevance}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />
          <TextField
            helperText={touched.quality ? errors.quality : ''}
            error={touched.quality && Boolean(errors.quality)}
            multiline
            rows={8}
            rowsMax={10}
            id="quality"
            name="quality"
            label="Quality of Scientific Approach"
            value={values.quality}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />
          <TextField
            helperText={touched.importance ? errors.importance : ''}
            error={touched.importance && Boolean(errors.importance)}
            multiline
            rows={8}
            rowsMax={10}
            id="importance"
            name="importance"
            label="Importance"
            value={values.importance}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />
          <FormControl className={props.classes.formControl} fullWidth>
            <InputLabel htmlFor="rating">Rating (out of 10)</InputLabel>
            <Select value={values.rating} onChange={handleChange('rating')}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <MenuItem key={num} value={num}>
                  {num}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            className={props.classes.button}
            variant="contained"
            onClick={handleReset}
            fullWidth
          >
            Reset Form
          </Button>
          <Button
            className={props.classes.button}
            type="submit"
            color="secondary"
            variant="contained"
            fullWidth
            disabled={!isValid || isSubmitting}
            style={{ marginTop: 10 }}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

const mapStateToProps = ({ SubmitReviewReducer }) => ({
  SubmitReviewReducer
});

export default connect(
  mapStateToProps,
  { submitReview }
)(withStyles(styles)(RespondForm));
