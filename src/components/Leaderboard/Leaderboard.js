import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";
import { getBattles } from "../../actions/battleActions";
import { getProfiles } from "../../actions/profileActions";
import dateToString from "../../utils/dateToString";
import Emoji from "../common/Emoji";
class Leaderboard extends Component {
  state = {
    pastDates: []
  };

  componentDidMount() {
    this.props.getBattles();
    this.props.getProfiles();
  }

  render() {
    const { battles, profiles } = this.props;

    const date = new Date();
    const utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours() - 8);
    const pacificDate = new Date(utcDate);
    let formatted = dateToString(pacificDate);

    let trophiesData;
    let trophiesDisplay;

    if (battles !== null && profiles !== null) {
      trophiesData = profiles.map(profile => ({
        handle: profile.handle,
        trophies: 0,
        _id: profile.user._id
      }));

      // let userId = this.props.profiles[0].user._id;
      trophiesData.forEach((profile, index) => {
        battles
          .filter(battle => battle.date !== formatted)
          .forEach(battle => {
            if (
              battle.hero1votes.length > battle.hero2votes.length &&
              battle.hero1votes.indexOf(profile._id) > -1
            ) {
              profile.trophies += 1;
            } else if (
              battle.hero2votes.length > battle.hero1votes.length &&
              battle.hero2votes.indexOf(profile._id) > -1
            ) {
              profile.trophies += 1;
            }
          });
      });

      trophiesData.sort((a, b) =>
        a.trophies < b.trophies ? 1 : b.trophies < a.trophies ? -1 : 0
      );

      trophiesDisplay = (
        <div className="Leaderboard__display">
          {trophiesData.map((user, index) => {
            if (user.trophies > 0) {
              return (
                <div key={index} className="Leaderboard__entry">
                  <div className="Leaderboard__rank">{index + 1}.</div>

                  <div className="Leaderboard__handle">{user.handle}</div>
                  <div className="Leaderboard__trophies">
                    <div className="Leaderboard__trophies--text">
                      {user.trophies}
                    </div>
                    <div className="Leaderboard__icon">
                      <Emoji symbol="🏆" label="trophy" />
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      );
    }

    return (
      <div className="Leaderboard">
        <div className="Leaderboard__label">Trophy Leaderboard</div>
        <div className="Leaderboard__text">
          *Trophies are rewarded for voting on the hero who receives the most
          votes*
        </div>
        {trophiesDisplay}
      </div>
    );
  }
}
Leaderboard.propTypes = {
  battles: PropTypes.array,
  getBattles: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  battles: state.battle.battles,
  profiles: state.profile.profiles
});

export default connect(
  mapStateToProps,
  { getBattles, getProfiles }
)(Leaderboard);
