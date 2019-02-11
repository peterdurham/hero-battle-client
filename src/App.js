import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import "./assets/scss/main.scss";
import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Navbar from "./components/Layout/Navbar";
import Battles from "./components/Battles/Battles";
import Heroes from "./components/Heroes/Heroes";
import BattleHistory from "./components/BattleHistory/BattleHistory";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateProfile from "./components/Profile/CreateProfile";
import Trophies from "./components/Dashboard/Trophies";
import Suggestions from "./components/Dashboard/Suggestions";
import Brackets from "./components/Dashboard/Brackets";
import Sidebar from "./components/Layout/Sidebar";

import "./assets/scss/main.scss";

// check for token
if (localStorage.jwtToken) {
  // set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and expiration
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());
    // clear current profile
    store.dispatch(clearCurrentProfile());
    //redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="HeroBattle">
            <Navbar />
            <div className="main">
              <Route exact path="/" render={props => <Battles />} />
              <Route path="/heroes" render={props => <Heroes {...props} />} />
              <Route path="/history" render={props => <BattleHistory />} />
              <Route path="/profile" render={props => <Profile {...props} />} />
              {/* <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} /> */}
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/dashboard/trophies"
                  component={Trophies}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/dashboard/suggestions"
                  component={Suggestions}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/dashboard/brackets"
                  component={Brackets}
                />
              </Switch>

              <Sidebar />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
