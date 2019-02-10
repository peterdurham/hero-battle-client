import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";
import "../../assets/scss/main.scss";
class Profile extends Component {
  // componentDidMount() {
  //   if (this.props.match.params.handle) {
  //     this.props.getProfileByHandle(this.props.match.params.handle);
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.profile.profile === null && this.props.profile.loading) {
  //     this.props.history.push("/not-found");
  //   }
  // }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">Profile</div>
            <div className="col-md-6" />
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
