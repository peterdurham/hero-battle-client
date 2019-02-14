import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";
import { connect } from "react-redux";

import { getCurrentProfile } from "../../actions/profileActions";
import { getBattles } from "../../actions/battleActions";

import Spinner from "../common/Spinner";
import ProfileDisplay from "./ProfileDisplay";

class Dashboard extends Component {
  state = {
    trophies: []
  };

  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getBattles();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="Dashboard__display">
            <ProfileDisplay
              handle={this.props.profile.profile.handle}
              avatar={this.props.profile.profile.avatar}
            />
          </div>
        );
      } else {
        dashboardContent = (
          <div className="Dashboard__noprofile">
            <p className="Dashboard__noprofile--welcome">Welcome {user.name}</p>
            <p className="Dashboard__noprofile--text">
              You have not yet setup a profile,
            </p>
            <p className="Dashboard__noprofile--text">
              please add some info to get started
            </p>
            <br />

            <Link to="/create-profile" className="Dashboard__noprofile--link">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="Dashboard">
        {dashboardContent}
        <div className="Dashboard__nav">
          <Link to="/dashboard/trophies" className="Dashboard__navlink">
            Trophies
          </Link>
          <Link to="/dashboard/suggestions" className="Dashboard__navlink">
            Add Heroes
          </Link>
          <Link to="/dashboard/brackets" className="Dashboard__navlink">
            Brackets
          </Link>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getBattles: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  battles: PropTypes.array
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  battles: state.battle.battles
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getBattles }
)(Dashboard);
