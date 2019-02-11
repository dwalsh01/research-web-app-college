import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions';
import "../styles/Registration.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      jobTitle: null,
      prefix: null,
      suffix: null,
      phone: null,
      phoneExt: null,
      orcid: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);

      this.props.registerUser(this.state.firstName,
                                this.state.lastName,
                                this.state.jobTitle,
                                this.state.prefix,
                                this.state.suffix,
                                this.state.phone,
                                this.state.phoneExt,
                                this.state.email,
                                this.state.password,
                                this.state.orcid
      );

    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName = "";
            //value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName = "";
            //value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    const { regSuccess, regError } = this.props;
    if (regSuccess){
      this.props.history.push('/login');
    }

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="jobTitle">Job Title</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Researcher"
                type="text"
                name="jobTitle"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="prefix">Prefix</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Mrs"
                type="text"
                name="prefix"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="suffix">Suffix</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Suffix"
                type="text"
                name="suffix"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="phoneExt">Phone Extension</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="353"
                type="text"
                name="phoneExt"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="phone">Phone Number</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="0834813000"
                type="text"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="orcid">ORCID</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="0000-0002-1891-0200"
                type="text"
                name="orcid"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <small><Link to='/login'>Already have an account?</Link></small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  regSuccess: state.regReducer.success,
  regError: state.regReducer.error
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Registration);
