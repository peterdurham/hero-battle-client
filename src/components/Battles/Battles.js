import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Battle from "./Battle";
import { submitVote, getTodaysBattles } from "../../actions/battleActions";

import Modal from "../UI/Modal";

import "../../assets/scss/main.scss";

class Battles extends Component {
  state = {
    heroSelected: [0, 0, 0, 0],
    battles: [],
    showSignup: false,
    showLogin: false,
    showVoteModal: false
  };

  componentDidMount() {
    this.props.getTodaysBattles();
  }

  selectHero = (heroNumber, category) => {
    let categoryIndex;

    const userId = this.props.auth.user.id;

    const { todaysBattles } = this.props;
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

    let votes = [...this.state.heroSelected];
    let nullVotes = votes.filter(hero => hero === 0);

    if (nullVotes.length === 0 && this.props.auth.isAuthenticated) {
      user = this.props.auth.user.id;
      let updatedBattles = [...this.props.todaysBattles].map(battle => {
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

      this.props.submitVote(updatedBattles[0], user);
      this.props.submitVote(updatedBattles[1], user);
      this.props.submitVote(updatedBattles[2], user);
      this.props.submitVote(updatedBattles[3], user);

      setTimeout(() => {
        this.props.getTodaysBattles();
      }, 625);
    } else {
      this.toggleShowModal();
    }
  };

  toggleShowLogin = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };
  toggleShowSignup = () => {
    this.setState({ showSignup: !this.state.showSignup });
  };
  toggleShowModal = () => {
    this.setState({ showVoteModal: !this.state.showVoteModal });
  };

  render() {
    const { auth, todaysBattles } = this.props;

    let votedToday;

    if (todaysBattles) {
      votedToday =
        todaysBattles
          .map(item => item.hero1votes.concat(item.hero2votes))
          .reduce((votes, battle) => votes.concat(battle))
          .indexOf(auth.user.id) > -1;
    }

    return (
      <div className="Battles">
        <Modal
          show={this.state.showVoteModal}
          modalClosed={this.toggleShowModal}
        >
          Please select 4 heroes to vote
        </Modal>

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

        {todaysBattles && auth.isAuthenticated ? (
          <div className="Battles__votesection">
            {votedToday ? (
              <div className="Battles__voted">
                <div className="Battles__voted--message">
                  <div className="Battles__voted--header">
                    Thanks for voting!
                  </div>
                  <NavLink
                    to="/history"
                    className="Battles__link"
                    activeClassName="Battles__selected"
                  >
                    Yesterday's Results
                  </NavLink>
                </div>
              </div>
            ) : (
              <button
                onClick={this.voteClick}
                className="Battles__votebutton"
                data-testid="vote-button"
              >
                Submit Vote
              </button>
            )}
          </div>
        ) : (
          <div className="Battles__voted">
            {!this.state.showLogin && !this.state.showSignup && (
              <div className="Battles__voted--text">
                Log in to vote on battles, win trophies, add new heroes, and
                more!
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

Battles.propTypes = {
  todaysBattles: PropTypes.array,
  auth: PropTypes.object.isRequired,
  getTodaysBattles: PropTypes.func.isRequired,
  submitVote: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  todaysBattles: state.battle.todaysBattles
});

export default connect(
  mapStateToProps,
  { submitVote, getTodaysBattles }
)(Battles);
