import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profileActions";
import { getBattles } from "../../actions/battleActions";
import Spinner from "../common/Spinner";
import ProfileDisplay from "./ProfileDisplay";
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
            _id: battle._id
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
    let profileContent;

    if (profile === null || loading) {
      trophiesContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        profileContent = (
          <ProfileDisplay
            handle={this.props.profile.profile.handle}
            avatar={this.props.profile.profile.avatar}
          />
        );

        trophiesContent = (
          <div className="Dashboard">
            <table className="Trophies__table">
              <tbody>
                {trophies.map((battle, index) => {
                  return (
                    <tr key={index} className="Trophies__result">
                      <Emoji symbol="🏆" />
                      <td className="Trophies__result--date">{battle.date}</td>
                      <td
                        className={
                          (battle.hero1 === battle.winner && trophies !== null
                            ? "Trophies__result--winner "
                            : "Trophies__result--loser ") +
                          "Trophies__result--hero1"
                        }
                      >
                        {battle.hero1}
                      </td>
                      <td
                        className={
                          (battle.hero2 === battle.winner && trophies !== null
                            ? "Trophies__result--winner "
                            : "Trophies__result--loser ") +
                          "Trophies__result--hero2"
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
          <div>
            <p>Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile">Create Profile</Link>
          </div>
        );
      }
    }

    return (
      <div>
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
        <div>{profileContent}</div>
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
