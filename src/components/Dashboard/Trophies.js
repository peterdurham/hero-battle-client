import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profileActions";
import { getBattles } from "../../actions/battleActions";
import Spinner from "../common/Spinner";

import Emoji from "../common/Emoji";
import dateToString from "../../utils/dateToString";
import "../../assets/scss/main.scss";

class Trophies extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getBattles();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { battles } = this.props;

    const date = new Date();
    const formatted = dateToString(date);

    let trophies = [];
    if (battles !== null) {
      let userId = user.id;

      battles
        .filter(battle => battle.date !== formatted)
        .forEach(battle => {
          let battleWon = {
            hero1: battle.hero1,
            hero2: battle.hero2,
            date: battle.date,
            _id: battle._id,
            category: battle.category,
            winner: battle.winner
          };

          if (
            battle.hero1votes.length > battle.hero2votes.length &&
            battle.hero1votes.indexOf(userId) > -1
          ) {
            battleWon.winner = battle.hero1;
            trophies.push(battleWon);
          } else if (
            battle.hero2votes.length > battle.hero1votes.length &&
            battle.hero2votes.indexOf(userId) > -1
          ) {
            battleWon.winner = battle.hero2;
            trophies.push(battleWon);
          }
        });
    }
    let trophiesContent;

    if (profile === null || loading) {
      trophiesContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        trophiesContent = (
          <div className="Trophies__content">
            <table className="Trophies__table">
              <tbody>
                {trophies.length === 0 && (
                  <div>
                    <div className="Trophies__none">No trophies yet...</div>
                    <div className="Trophies__none">
                      Vote on Battles to win up to 4 trophies per day!
                    </div>
                  </div>
                )}
                {trophies.map((battle, index) => {
                  return (
                    <tr key={index} className="Trophies__result">
                      <div className="Trophies__icon">
                        <Emoji symbol="🏆" />
                      </div>
                      <td className="Trophies__result--date">{battle.date}</td>
                      <td
                        className={
                          (battle.category === "Video Games" &&
                          battle.winner === battle.hero1
                            ? "Trophies__videogames "
                            : "") +
                          (battle.category === "Movies" &&
                          battle.winner === battle.hero1
                            ? "Trophies__movies "
                            : "") +
                          (battle.category === "Superheroes" &&
                          battle.winner === battle.hero1
                            ? "Trophies__superheroes "
                            : "") +
                          (battle.category === "Mythology" &&
                          battle.winner === battle.hero1
                            ? "Trophies__mythology "
                            : "") +
                          "Trophies__result--hero1 Trophies__result--hero"
                        }
                      >
                        {battle.hero1}
                      </td>
                      <td
                        className={
                          (battle.category === "Video Games" &&
                          battle.winner === battle.hero2
                            ? "Trophies__videogames "
                            : "") +
                          (battle.category === "Movies" &&
                          battle.winner === battle.hero2
                            ? "Trophies__movies "
                            : "") +
                          (battle.category === "Superheroes" &&
                          battle.winner === battle.hero2
                            ? "Trophies__superheroes "
                            : "") +
                          (battle.category === "Mythology" &&
                          battle.winner === battle.hero2
                            ? "Trophies__mythology "
                            : "") +
                          "Trophies__result--hero2 Trophies__result--hero"
                        }
                      >
                        {battle.hero2}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      } else {
        // User is logged in but has no profile
        trophiesContent = (
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
      <div className="Trophies">
        <div className="Dashboard__nav">
          <Link to="/dashboard" className="Dashboard__navlink">
            Back to Profile
          </Link>
        </div>

        <div className="Dashboard__title">Trophies</div>

        <div>{trophiesContent}</div>
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
  { getBattles, getCurrentProfile }
)(Trophies);
