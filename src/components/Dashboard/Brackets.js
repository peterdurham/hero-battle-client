import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profileActions";

import Spinner from "../common/Spinner";

import "../../assets/scss/main.scss";
class Brackets extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let bracketsContent;

    if (profile === null || loading) {
      bracketsContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        bracketsContent = (
          <div className="Brackets__content">
            <div className="Brackets__welcome">
              Bracket competitions coming soon!!!
            </div>
          </div>
        );
      } else {
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
          <Link to="/dashboard" className="Dashboard__navlink">
            Back to Profile
          </Link>
        </div>

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
