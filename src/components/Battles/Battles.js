import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import Battle from "./Battle";
import { getBattles, submitVote } from "../../actions/battleActions";

import BattleRegister from "../auth/BattleRegister";
import BattleLogin from "../auth/BattleLogin";
import dateToString from "../../utils/dateToString";
import "../../assets/scss/main.scss";

class Battles extends Component {
  state = {
    heroSelected: [0, 0, 0, 0],
    battles: [],
    dateVoted: null,
    showSignup: false,
    showLogin: false
  };

  componentDidMount() {
    this.props.getBattles();
  }

  selectHero = (heroNumber, category) => {
    let categoryIndex;

    const userId = this.props.auth.user.id;
    const date = new Date();
    const formatted = dateToString(date);
    let todaysBattles = this.props.battles.filter(
      battle => battle.date === formatted
    );
    if (
      todaysBattles[0].hero1votes.indexOf(userId) < 0 &&
      todaysBattles[0].hero2votes.indexOf(userId) < 0
    ) {
      if (category === "Video Games") {
        categoryIndex = 0;
      } else if (category === "Movies") {
        categoryIndex = 1;
      } else if (category === "Superheroes") {
        categoryIndex = 2;
      } else if (category === "Mythology") {
        categoryIndex = 3;
      }

      let selected = [...this.state.heroSelected];

      if (
        selected[categoryIndex] === 0 ||
        selected[categoryIndex] !== heroNumber
      ) {
        selected[categoryIndex] = heroNumber;
      } else if (selected[categoryIndex] === heroNumber) {
        selected[categoryIndex] = 0;
      }
      this.setState({ heroSelected: selected });
    }
  };

  voteClick = () => {
    let user;
    if (this.props.auth.isAuthenticated) {
      user = this.props.auth.user.id;
    } else {
      user = "noauth";
    }

    let votes = [...this.state.heroSelected];
    let nullVotes = votes.filter(hero => hero === 0);
    const date = new Date();
    const formatted = dateToString(date);

    // add     && voted !== formatted      to the if below to enforce 1 vote per day in cache
    if (nullVotes.length === 0 && this.props.auth.isAuthenticated) {
      let battles = [...this.props.battles].filter(
        battle => battle.date === formatted
      );
      let updatedBattles = battles.map(battle => {
        if (battle.category === "Video Games") {
          if (votes[0] === 1) {
            battle.hero1votes.push(user);
          } else if (votes[0] === 2) {
            battle.hero2votes.push(user);
          }
        }
        if (battle.category === "Movies") {
          if (votes[1] === 1) {
            battle.hero1votes.push(user);
          } else if (votes[1] === 2) {
            battle.hero2votes.push(user);
          }
        }
        if (battle.category === "Superheroes") {
          if (votes[2] === 1) {
            battle.hero1votes.push(user);
          } else if (votes[2] === 2) {
            battle.hero2votes.push(user);
          }
        }
        if (battle.category === "Mythology") {
          if (votes[3] === 1) {
            battle.hero1votes.push(user);
          } else if (votes[3] === 2) {
            battle.hero2votes.push(user);
          }
        }

        return battle;
      });

      this.props.submitVote(updatedBattles, user);

      this.props.getBattles();
    }
  };

  toggleShowLogin = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };
  toggleShowSignup = () => {
    this.setState({ showSignup: !this.state.showSignup });
  };

  render() {
    const date = new Date();
    const formatted = dateToString(date);
    const { battles, auth } = this.props;
    let votedToday;
    // let todaysVotes = [];
    // let user = this.props.auth.user.id;

    if (battles) {
      votedToday =
        battles
          .filter(battle => battle.date === formatted)
          .map(item => item.hero1votes.concat(item.hero2votes))
          .reduce((votes, battle) => votes.concat(battle))
          .indexOf(auth.user.id) > -1;

      // todaysVotes = battles
      //   .filter(battle => battle.date === formatted)
      //   .map(battle => {
      //     if (battle.hero1votes.indexOf(user)) {
      //       return "hero1";
      //     } else if (battle.hero3votes.indexOf(user)) {
      //       return "hero2";
      //     }
      //   });
    }

    return (
      <div className="Battles">
        <div className="Battles__top">
          <Battle
            category="Video Games"
            selectHero={this.selectHero}
            heroSelected={this.state.heroSelected[0]}
            dateVoted={this.state.dateVoted}
          />
          <Battle
            category="Movies"
            selectHero={this.selectHero}
            heroSelected={this.state.heroSelected[1]}
            dateVoted={this.state.dateVoted}
          />
        </div>
        <div className="Battles__bottom">
          <Battle
            category="Superheroes"
            selectHero={this.selectHero}
            heroSelected={this.state.heroSelected[2]}
            dateVoted={this.state.dateVoted}
          />
          <Battle
            category="Mythology"
            selectHero={this.selectHero}
            heroSelected={this.state.heroSelected[3]}
            dateVoted={this.state.dateVoted}
          />
        </div>

        {battles && this.props.auth.isAuthenticated ? (
          <div>
            {votedToday ? (
              <div className="Battles__voted">
                Thanks for voting! Come back tomorrow for new battles
              </div>
            ) : (
              <button onClick={this.voteClick} className="Battles__votebutton">
                Vote
              </button>
            )}
          </div>
        ) : (
          <div className="Battle__voted">
            {!this.state.showLogin && !this.state.showSignup && (
              <div className="Battle__auth">
                <div
                  to="/register"
                  className="Battles__link"
                  onClick={this.toggleShowSignup}
                >
                  Sign up
                </div>
                <div
                  to="/Login"
                  className="Battles__link"
                  onClick={this.toggleShowLogin}
                >
                  Log in
                </div>
                <div className="Battles__voted--text">
                  Log in to vote and win trophies
                </div>
              </div>
            )}
          </div>
        )}
        {this.state.showSignup && (
          <div className="Battles__BattleRegister">
            <BattleRegister
              toggleShowLogin={this.toggleShowLogin}
              toggleShowSignup={this.toggleShowSignup}
            />
            <div className="Battles__return" onClick={this.toggleShowSignup}>
              back
            </div>
          </div>
        )}
        {this.state.showLogin && (
          <div className="Battles__BattleLogin">
            <BattleLogin
              toggleShowLogin={this.toggleShowLogin}
              toggleShowSignup={this.toggleShowSignup}
            />
            <div className="Battles__return" onClick={this.toggleShowLogin}>
              back
            </div>
          </div>
        )}
      </div>
    );
  }
}

Battles.propTypes = {
  battles: PropTypes.array,
  auth: PropTypes.object.isRequired,
  getBattles: PropTypes.func.isRequired,
  submitVote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  battles: state.battle.battles,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getBattles, submitVote }
)(Battles);
