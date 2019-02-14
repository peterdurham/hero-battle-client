import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser, clearErrors } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    const { errors } = this.props;
    if (errors.email || errors.password || errors.password2) {
      this.props.clearErrors();
    }
  };
  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);

    setTimeout(() => {
      const { errors } = this.props;
      if (!errors.email && !errors.password && !errors.password2) {
        this.props.toggleShow("Register");
        this.props.toggleShow("Login");
      }
    }, 1000);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="Register">
        <h1 className="Register__header">Sign Up</h1>
        <p className="Register__text">Create your Hero Battle account</p>
        <form noValidate onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="Email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            error={errors.email}
            category={"email"}
          />
          <TextFieldGroup
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            error={errors.password}
            category={"password"}
          />
          <TextFieldGroup
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onChange}
            error={errors.password2}
            category={"password"}
          />
          <input type="submit" className="Register__submit" />
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser, clearErrors }
)(withRouter(Register));
