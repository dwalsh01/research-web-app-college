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
import { login } from '../../actions';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Required!'),
  password: Yup.string().required('Required!')
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      open: false,
      email: '',
      pwd: ''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    const { email, pwd } = this.state;
    event.preventDefault();
    this.props.login(email, pwd);
  };

  handleTextFieldChange = (e, item) => {
    if (item === 0) {
      this.setState({
        email: e.target.value
      });
    } else if (item === 1) {
      this.setState({ pwd: e.target.value });
    }
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" size="large" onClick={this.handleClickOpen}>
          Login
        </Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To login, please enter your email address and password below
            </DialogContentText>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={(values, { setSubmitting }) => {
                this.props.login(values.email, values.password);
                this.handleClose();
                setSubmitting(false);
              }}
            >
              {({ isValid, errors, handleChange, values, isSubmitting, touched }) => (
                <Form className={classes.container}>
                  <TextField
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && Boolean(errors.email)}
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                  />
                  <TextField
                    helperText={touched.email ? errors.password : ''}
                    error={touched.password && Boolean(errors.prefix)}
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
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

export default connect(
  mapStateToProps,
  { login }
)(withStyles(styles)(FormDialog));
