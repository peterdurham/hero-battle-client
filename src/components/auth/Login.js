import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../actions/authActions";
import {
  setProfileLoading,
  getCurrentProfile
} from "../../actions/profileActions";

import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
    this.props.setProfileLoading();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, email, password } = this.state;

    return (
      <div className="Login">
        <h1 className="Login__header">Log In</h1>

        <p className="Login__text">Sign in to your Hero Battle account</p>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={this.onChange}
            error={errors.email}
            category={"email"}
          />
          <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.onChange}
            error={errors.password}
            category={"password"}
          />

          <input type="submit" className="Login__submit" />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
  loginUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  setProfileLoading: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, setProfileLoading, getCurrentProfile }
)(withRouter(Login));
