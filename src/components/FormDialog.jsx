import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
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
    event.preventDefault();
    console.log(this.state);
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
    return (
      <div>
        <Button color="inherit" onClick={this.handleClickOpen}>
          Login
        </Button>
        <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
          <form onSubmit={this.handleSubmit}>
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To login, please enter your email address and password below
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                onChange={e => this.handleTextFieldChange(e, 0)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                fullWidth
                onChange={e => this.handleTextFieldChange(e, 1)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Login
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
