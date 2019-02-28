import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import { withStyles, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';

const UserSchema = Yup.object().shape({
  f_name: Yup.string().required('Required!'),
  l_name: Yup.string().required('Required!'),
  email: Yup.string()
    .email()
    .required(),
  prefix: Yup.string().required(),
  suffix: Yup.string(),
  phone: Yup.string().min(5, 'Too Short!'),
  phone_ext: Yup.number().positive(),
  job_title: Yup.string().required()
});

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
const UserForm = ({ user, ...props }) => (
  <div>
    <Typography variant="h2">Personal Information</Typography>
    <Formik
      initialValues={user}
      validationSchema={UserSchema}
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
          <TextField
            helperText={errors.prefix || ''}
            error={Boolean(errors.prefix)}
            id="prefix"
            name="prefix"
            label="Prefix"
            value={values.prefix}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            className={props.classes.textFieldOther}
          />
          <TextField
            helperText={errors.f_name || ''}
            error={Boolean(errors.f_name)}
            id="f_name"
            name="f_name"
            label="First Name"
            value={values.f_name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            className={props.classes.textFieldName}
          />

          <TextField
            helperText={errors.l_name || ''}
            error={Boolean(errors.l_name)}
            id="l_name"
            name="l_name"
            label="Last Name"
            value={values.l_name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            className={props.classes.textFieldName}
          />
          <TextField
            helperText={errors.suffix || ''}
            error={Boolean(errors.suffix)}
            id="suffix"
            name="suffix"
            label="suffix"
            value={values.suffix}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            className={props.classes.textFieldOther}
          />
          <TextField
            helperText={errors.job_title || ''}
            error={Boolean(errors.job_title)}
            id="job_title"
            name="job_title"
            label="Job Title"
            value={values.job_title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />
          <TextField
            helperText={errors.phone || ''}
            error={Boolean(errors.phone)}
            id="phone"
            name="phone"
            label="Phone Number"
            value={values.phone}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />
          <TextField
            helperText={errors.phone_ext || ''}
            error={Boolean(errors.phone_ext)}
            id="phone_ext"
            name="phone_ext"
            label="Phone Ext"
            type="number"
            value={values.phone_ext}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            fullWidth
            className={props.classes.textField}
          />

          <Button type="submit" variant="contained" color="secondary" disabled={!isValid} fullWidth>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default withStyles(styles)(UserForm);
