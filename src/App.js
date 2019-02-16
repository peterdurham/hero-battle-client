import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import "./assets/scss/main.scss";
import store from "./store";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/Layout/Navbar";
import Battles from "./components/Battles/Battles";
import Heroes from "./components/Heroes/Heroes";
import BattleHistory from "./components/BattleHistory/BattleHistory";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateProfile from "./components/CreateProfile/CreateProfile";
import Trophies from "./components/Dashboard/Trophies";
import Suggestions from "./components/Dashboard/Suggestions";
import Brackets from "./components/Dashboard/Brackets";
import Sidebar from "./components/Layout/Sidebar";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
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
              <Route path="/leaderboard" render={props => <Leaderboard />} />
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
