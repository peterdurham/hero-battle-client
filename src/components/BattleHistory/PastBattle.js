import React from "react";
import { connect } from "react-redux";
import "../../assets/scss/main.scss";
import dateToString from "../../utils/dateToString";

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
      hero1Class = " BattleHistory__videogames";
    } else if (battleDetails.category === "Movies") {
      hero1Class = " BattleHistory__movies";
    } else if (battleDetails.category === "Superheroes") {
      hero1Class = " BattleHistory__superheroes";
    } else if (battleDetails.category === "Mythology") {
      hero1Class = " BattleHistory__mythology";
    }
  }
  if (battleDetails.hero2votes.length > battleDetails.hero1votes.length) {
    if (battleDetails.category === "Video Games") {
      hero2Class = " BattleHistory__videogames";
    } else if (battleDetails.category === "Movies") {
      hero2Class = " BattleHistory__movies";
    } else if (battleDetails.category === "Superheroes") {
      hero2Class = " BattleHistory__superheroes";
    } else if (battleDetails.category === "Mythology") {
      hero2Class = " BattleHistory__mythology";
    }
  }

  return (
    <div key={battleDetails._id} className="BattleHistory__battle">
      {trophies.indexOf(battleDetails._id) > -1 && <div>🏆</div>}

      <div className={"BattleHistory__hero1" + hero1Class}>
        {battleDetails.hero1} {battleDetails.hero1votes.length}
      </div>
      <div className={"BattleHistory__hero2" + hero2Class}>
        {battleDetails.hero2} {battleDetails.hero2votes.length}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  battles: state.battle.battles,
  auth: state.auth
});
export default connect(mapStateToProps)(PastBattle);
