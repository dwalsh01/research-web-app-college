import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { withStyles } from '@material-ui/core';

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Required!'),
  password: Yup.string()
    .min(5, 'too short!')
    .required('Required!'),
  f_name: Yup.string()
    .min(1, 'too short!')
    .required('Required!'),
  l_name: Yup.string()
    .min(1, 'too short!')
    .required('Required!'),
  prefix: Yup.string()
    .min(1, 'too short!')
    .required('Required!'),
  suffix: Yup.string(),
  phone_no: Yup.string()
    .min(5, 'too short!')
    .required('Required!'),
  phone_ext: Yup.number(),
  job_title: Yup.string()
    .min(2, 'too short!')
    .required('Required!'),
  orcid: Yup.string()
});

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  }
});
class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" size="large" color="secondary" onClick={this.handleClickOpen}>
          Register
        </Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <DialogContentText>To Register, please enter your details below</DialogContentText>
            <Formik
              initialValues={{
                f_name: '',
                l_name: '',
                prefix: '',
                suffix: '',
                job_title: '',
                phone_no: '',
                phone_ext: 0,
                email: '',
                password: '',
                orcid: ''
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                this.handleClose();
                setSubmitting(false);
              }}
            >
              {({ isValid, errors, handleChange, values, isSubmitting, touched, handleBlur }) => (
                <Form className={classes.container}>
                  <TextField
                    helperText={touched.prefix ? errors.name : ''}
                    error={touched.prefix && Boolean(errors.prefix)}
                    id="prefix"
                    name="prefix"
                    label="Prefix"
                    value={values.prefix}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.f_name ? errors.f_name : ''}
                    error={touched.f_name && Boolean(errors.f_name)}
                    id="f_name"
                    name="f_name"
                    label="First Name"
                    value={values.f_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.l_name ? errors.l_name : ''}
                    error={touched.l_name && Boolean(errors.l_name)}
                    id="l_name"
                    name="l_name"
                    label="Last Name"
                    value={values.l_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.suffix ? errors.suffix : ''}
                    error={touched.suffix && Boolean(errors.suffix)}
                    id="suffix"
                    name="suffix"
                    label="Suffix"
                    value={values.suffix}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.job_title ? errors.job_title : ''}
                    error={touched.job_title && Boolean(errors.job_title)}
                    id="job_title"
                    name="job_title"
                    label="Job Title"
                    value={values.job_title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.phone_no ? errors.phone_no : ''}
                    error={touched.phone_no && Boolean(errors.phone_no)}
                    id="phone_no"
                    name="phone_no"
                    label="Phone Number"
                    value={values.phone_no}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.phone_ext ? errors.phone_ext : ''}
                    error={touched.phone_ext && Boolean(errors.phone_ext)}
                    id="phone_ext"
                    name="phone_ext"
                    label="Phone Extension"
                    value={values.phone_ext}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && Boolean(errors.email)}
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.password ? errors.password : ''}
                    error={touched.password && Boolean(errors.password)}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.orcid ? errors.orcid : ''}
                    error={touched.orcid && Boolean(errors.orcid)}
                    id="orcid"
                    name="orcid"
                    label="ORCID"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                  />
                  <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      color="secondary"
                      disabled={!isValid || isSubmitting}
                      fullWidth
                    >
                      Submit
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUserReducer }) => ({
  currentUserReducer
});

export default connect(mapStateToProps)(withStyles(styles)(FormDialog));
