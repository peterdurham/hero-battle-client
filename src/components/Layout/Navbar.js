import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink, Link } from "react-router-dom";
import "../../assets/scss/main.scss";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { auth } = this.props;

    return (
      <div className="Navbar">
        <div className="Navbar__left">
          <NavLink
            exact
            to="/"
            className="Navbar__link"
            activeClassName="Navbar__selected"
          >
            Battles
          </NavLink>
          <NavLink
            to="/heroes"
            className="Navbar__link"
            activeClassName="Navbar__selected"
          >
            Heroes
          </NavLink>
          <NavLink
            to="/history"
            className="Navbar__link"
            activeClassName="Navbar__selected"
          >
            Battle History
          </NavLink>
        </div>
        <div className="Navbar__right">
          {auth.isAuthenticated ? (
            <div>
              <div className="Navbar__dropdown">
                <NavLink
                  to="/dashboard"
                  className="Navbar__dropdown--link"
                  activeClassName="Navbar__selected"
                >
                  Profile<span className="Navigation__icon">&#9660;</span>
                </NavLink>
                <div className="dropdown-content">
                  <Link to="/dashboard/trophies" className="dropdown-selection">
                    Trophies
                  </Link>

                  <Link
                    to="/dashboard/suggestions"
                    className="dropdown-selection"
                  >
                    Suggestions
                  </Link>

                  <Link to="/dashboard/brackets" className="dropdown-selection">
                    Brackets
                  </Link>

                  <div
                    onClick={this.onLogoutClick.bind(this)}
                    className="Navbar__hoverlink"
                  >
                    <Link to="/" className="dropdown-selection">
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Hero battle</div>
          )}
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  clearCurrentProfile: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile },
  null,
  { pure: false }
)(Navbar);
