import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profileActions";

import Spinner from "../common/Spinner";
import ProfileDisplay from "./ProfileDisplay";
import "../../assets/scss/main.scss";
class Brackets extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let bracketsContent;
    let profileContent;
    if (profile === null || loading) {
      bracketsContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        profileContent = (
          <ProfileDisplay
            handle={this.props.profile.profile.handle}
            avatar={this.props.profile.profile.avatar}
          />
        );
        bracketsContent = (
          <div className="Dashboard">
            <div>Brackets</div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        bracketsContent = (
          <div className="Dashboard__noprofile">
            <p className="Dashboard__noprofile--welcome">Welcome {user.name}</p>
            <p className="Dashboard__noprofile--text">
              You have not yet setup a profile, please add some info
            </p>
            <Link to="/create-profile" className="Dashboard__noprofile--link">
              Create Profile
            </Link>
          </div>
        );
      }
    }
    return (
      <div className="Brackets">
        <div className="Dashboard__nav">
          <Link to="/dashboard/trophies" className="Dashboard__navlink">
            Trophies
          </Link>
          <Link to="/dashboard/suggestions" className="Dashboard__navlink">
            Suggestions
          </Link>
          <Link to="/dashboard/brackets" className="Dashboard__navlink">
            Brackets
          </Link>
        </div>
        <div>{profileContent}</div>
        <div className="Dashboard__title">Brackets</div>
        <div>{bracketsContent}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  battles: state.battle.battles
});
export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Brackets);
