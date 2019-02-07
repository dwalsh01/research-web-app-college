import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class TestingLogin extends Component {
  componentDidMount() {
    this.props.login('mw11@test.com', 'password');
  }

  render() {
    const { user, isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return <div>Loading...</div>;
    }

    return <h1>{user.email}</h1>;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.authReducer.isLoggedIn,
  user: state.authReducer.user,
  error: state.authReducer.error,
  errorMsg: state.authReducer.errorMsg
});

export default connect(
  mapStateToProps,
  { login }
)(TestingLogin);
