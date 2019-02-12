import React, { Component } from "react";
import { connect } from "react-redux";

import "../../assets/scss/main.scss";

import Chat from "../Chat/Chat";
import Login from "../auth/Login";
import Register from "../auth/Register";

class Sidebar extends Component {
  state = {
    showRegister: false,
    showLogin: false,
    showCreateProfile: false
  };

  toggleShow = component => {
    if (component === "Login") {
      this.setState({ showLogin: !this.state.showLogin });
    } else if (component === "Register") {
      this.setState({ showRegister: !this.state.showRegister });
    } else if (component === "CreateProfile") {
      this.setState({ showCreateProfile: !this.state.showCreateProfile });
    }
  };

  clearToggles = () =>
    this.setState({
      showLogin: false,
      showRegister: false,
      showCreateProfile: false
    });

  render() {
    const { auth } = this.props;
    const { showLogin, showRegister } = this.state;

    return (
      <div className="Sidebar">
        {auth.isAuthenticated ? (
          <Chat
            toggleShow={this.toggleShow}
            showCreateProfile={this.state.showCreateProfile}
          />
        ) : (
          <div className="Sidebar__welcome">
            {!showLogin && !showRegister && auth.isAuthenticated === false && (
              <div className="Sidebar__auth">
                <div className="Sidebar__header">Welcome to Hero Battle!</div>
                <div className="Sidebar__text">
                  Sign up to vote on 4 new battles each day
                </div>
                <div className="Sidebar__buttons">
                  <button
                    onClick={() => this.toggleShow("Login")}
                    className="Sidebar__login"
                  >
                    Login
                  </button>

                  <button
                    onClick={() => this.toggleShow("Register")}
                    className="Sidebar__register"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            )}
            {(showLogin || showRegister) && (
              <button onClick={this.clearToggles} className="Sidebar__back">
                <i className="fa fa-arrow-left Sidebar__back--icon" />
                back
              </button>
            )}
            {showLogin && (
              <Login
                toggleShow={this.toggleShow}
                clearToggles={this.clearToggles}
                setLoading={this.setLoading}
              />
            )}
            {showRegister && <Register toggleShow={this.toggleShow} />}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Sidebar);
