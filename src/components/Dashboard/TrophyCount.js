import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";

import dateToString from "../../utils/dateToString";

import Emoji from "../common/Emoji";

const TrophyCount = props => {
  const { user } = props.auth;

  const { battles } = props;
  const date = new Date();
  const utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours() - 8);
  const pacificDate = new Date(utcDate);
  let formatted = dateToString(pacificDate);

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

  return (
    <div className="TrophyCount">
      {trophies.length}
      <span className="TrophyCount__emoji">
        <Emoji symbol="🏆" />
      </span>
    </div>
  );
};
TrophyCount.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  battles: PropTypes.array
};
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  battles: state.battle.battles
});

export default connect(mapStateToProps)(TrophyCount);
