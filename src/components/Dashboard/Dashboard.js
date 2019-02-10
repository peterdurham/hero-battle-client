import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getBattles } from "../../actions/battleActions";
import Spinner from "../common/Spinner";
import isEmpty from "../../utils/is-empty";
import "../../assets/scss/main.scss";

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

    let profileCreated = !isEmpty(this.props.profile.profile);

    let dashboardContent;

    // .filter(battle => battle.date === formatted)
    // .map(item => item.hero1votes.concat(item.hero2votes))
    // .reduce((votes, battle) => votes.concat(battle))
    // .indexOf(auth.user.id) > -1;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div className="Dashboard">
            <ProfileDisplay
              handle={this.props.profile.profile.handle}
              avatar={this.props.profile.profile.avatar}
            />
          </div>
        );
      } else {
        // User is logged in but has no profile
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

        {dashboardContent}
        {/* if profile is empty (not created) dont show dash. this.props.profile.profile should be a {} */}
        {profileCreated && <h1 className="Dashboard__title">Dashboard</h1>}
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getBattles: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
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
