import React from "react";
import { connect } from "react-redux";
import "../../assets/scss/main.scss";
import PropTypes from "prop-types";
import dateToString from "../../utils/dateToString";

import Emoji from "../common/Emoji";

const PastBattle = ({ battleDetails, auth, battles }) => {
  const date = new Date();
  const formatted = dateToString(date);

  let trophies = [];
  if (battles !== null) {
    let userId = auth.user.id;

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
    trophies = trophies.map(battle => battle._id);
  }

  let hero1Class = "";
  let hero2Class = "";

  if (battleDetails.hero1votes.length > battleDetails.hero2votes.length) {
    if (battleDetails.category === "Video Games") {
      hero1Class = " PastBattle__videogames";
    } else if (battleDetails.category === "Movies") {
      hero1Class = " PastBattle__movies";
    } else if (battleDetails.category === "Superheroes") {
      hero1Class = " PastBattle__superheroes";
    } else if (battleDetails.category === "Mythology") {
      hero1Class = " PastBattle__mythology";
    }
  }
  if (battleDetails.hero2votes.length > battleDetails.hero1votes.length) {
    if (battleDetails.category === "Video Games") {
      hero2Class = " PastBattle__videogames";
    } else if (battleDetails.category === "Movies") {
      hero2Class = " PastBattle__movies";
    } else if (battleDetails.category === "Superheroes") {
      hero2Class = " PastBattle__superheroes";
    } else if (battleDetails.category === "Mythology") {
      hero2Class = " PastBattle__mythology";
    }
  }

  return (
    <div key={battleDetails._id} className="PastBattle__battle">
      {trophies.indexOf(battleDetails._id) > -1 && (
        <div className="PastBattle__emoji">
          <Emoji symbol="🏆" label="trophy" />
        </div>
      )}

      <div className={"PastBattle__hero1" + hero1Class}>
        {battleDetails.hero1} {battleDetails.hero1votes.length}
      </div>
      <div className={"PastBattle__hero2" + hero2Class}>
        {battleDetails.hero2} {battleDetails.hero2votes.length}
      </div>
    </div>
  );
};
PastBattle.propTypes = {
  battles: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  battleDetails: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  battles: state.battle.battles,
  auth: state.auth
});
export default connect(mapStateToProps)(PastBattle);
