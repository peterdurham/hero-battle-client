import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextFieldGroup from "../common/TextFieldGroup";

import { createProfile } from "../../actions/profileActions";
import Avatar from "../Profile/Avatar";
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

    if (!profileData.avatar) {
      console.log("please select an avatar");
    } else {
      this.props.createProfile(profileData, this.props.history);
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  selectAvatar = avatar => {
    this.setState({ avatar });
  };

  render() {
    const { errors } = this.state;
    const avatars = [
      "Elf",
      "Princess",
      "Assassin",
      "Superhero",
      "Swordsman",
      "Thug",
      "Wizard"
    ];
    return (
      <div className="CreateProfile">
        <h1 className="CreateProfile__header">Create Your Profile</h1>
        <p className="CreateProfile__text">
          Let's get some information to make your profile stand out
        </p>
        <small className="CreateProfile__required">* = required fields</small>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* Profile Handle"
            name="handle"
            value={this.state.handle}
            onChange={this.onChange}
            error={errors.handle}
            info="A unique handle for your profile URL. Your full name, company name, nickname"
          />
          <div className="CreateProfile__label">Choose an avatar:</div>
          <div className="CreateProfile__avatars">
            {avatars.map(item => (
              <div
                key={item}
                onClick={() => this.selectAvatar(item)}
                className={
                  item === this.state.avatar ? "CreateProfile__selected " : ""
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
  createProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile }
)(withRouter(CreateProfile));
