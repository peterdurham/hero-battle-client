import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextFieldGroup from "../common/TextFieldGroup";

import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import { clearErrors } from "../../actions/authActions";
import Avatar from "./Avatar";
import "../../assets/scss/main.scss";
class CreateProfile extends Component {
  state = {
    handle: "",
    avatar: "",
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      avatar: this.state.avatar
    };

    if (profileData.avatar) {
      this.props.createProfile(profileData);

      setTimeout(() => {
        if (!this.props.errors.handle) {
          this.props.getCurrentProfile();
        }
      }, 1000);
    }

    setTimeout(() => {
      const { errors } = this.props;
      if (!errors.email && !errors.password && !errors.password2) {
        this.props.toggleShow("Register");
        this.props.toggleShow("Login");
      }
    }, 1000);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    const { errors, clearErrors } = this.props;
    if (errors.handle) {
      clearErrors();
    }
  };

  selectAvatar = avatar => {
    this.setState({ avatar });
  };

  render() {
    const { errors } = this.state;
    const avatars = [
      "Elf",
      "Princess",
      "Swordsman",
      "Superhero",
      "Thug",
      "Assassin",
      "Wizard"
    ];
    return (
      <div className="CreateProfile">
        <h1 className="CreateProfile__header">Create Your Profile</h1>
        <p className="CreateProfile__text">
          Select a unique profile name and avatar for access to chat, trophies,
          new heroes and more
        </p>

        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* profile name"
            name="handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
          />
          <div className="CreateProfile__label">Avatar:</div>
          <div className="CreateProfile__avatars">
            {avatars.map(item => (
              <div
                key={item}
                onClick={() => this.selectAvatar(item)}
                className={
                  (item === this.state.avatar
                    ? "CreateProfile__selected "
                    : "") + "CreateProfile__avatar"
                }
              >
                <Avatar name={item} />
              </div>
            ))}
          </div>

          <input
            type="submit"
            value="Submit"
            className="CreateProfile__submit"
          />
        </form>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile, clearErrors }
)(withRouter(CreateProfile));
