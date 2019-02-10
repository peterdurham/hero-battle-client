import React from "react";
import { connect } from "react-redux";

import dateToString from "../../utils/dateToString";
const TrophyCount = props => {
  const { user } = props.auth;

  const { battles } = props;
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

  return (
    <div className="TrophyCount">
      {trophies.length}
      {/* <span
        className="Dashboard__emoji"
        role="img"
        aria-label={"trophy" ? "trophy" : ""}
        aria-hidden={"trophy" ? "false" : "true"}
      > */}
      🏆
      {/* </span> */}
    </div>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  battles: state.battle.battles
});

export default connect(mapStateToProps)(TrophyCount);
