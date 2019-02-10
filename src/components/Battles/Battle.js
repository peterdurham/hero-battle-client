import React from "react";
import { connect } from "react-redux";
import dateToString from "../../utils/dateToString";
import PropTypes from "prop-types";

import "../../assets/scss/main.scss";
import HeroThumbnail from "../imageComponents/HeroThumbnail";
import ResultsBar from "./ResultsBar";

const Battle = ({ category, battles, selectHero, heroSelected, auth }) => {
  const date = new Date();
  const formatted = dateToString(date);
  let battleContent;
  let currentBattle;
  let userId = auth.user.id;
  let userVote;

  if (!battles) {
    battleContent = <h1>loading...</h1>;
  } else {
    currentBattle = battles.filter(
      battle => battle.date === formatted && battle.category === category
    )[0];

    if (currentBattle.hero1votes.indexOf(userId) > -1) {
      userVote = "hero1";
    } else if (currentBattle.hero2votes.indexOf(userId) > -1) {
      userVote = "hero2";
    }

    const totalVotes =
      currentBattle.hero1votes.length + currentBattle.hero2votes.length;

    const hero1percentage = Number(
      (currentBattle.hero1votes.length / totalVotes) * 100
    );
    const hero2percentage = Number(
      (currentBattle.hero2votes.length / totalVotes) * 100
    );

    const categoryFormatted = category.replace(/-|\s/g, "").toLowerCase();
    const battleClass = `Battle__${categoryFormatted} + Battle`;

    battleContent = (
      <div className={battleClass}>
        <div className="Battle__category">{category}</div>
        <div className="Battle__heroes">
          <div
            className={
              (heroSelected === 1 || userVote === "hero1"
                ? "Battle__selected "
                : "") + "Battle__hero"
            }
            onClick={() => selectHero(1, category)}
          >
            <HeroThumbnail hero={currentBattle.hero1} />
            <div className="Battle__heroName">{currentBattle.hero1}</div>
          </div>
          <div
            className={
              (heroSelected === 2 || userVote === "hero2"
                ? "Battle__selected "
                : "") + "Battle__hero"
            }
            onClick={() => selectHero(2, category)}
          >
            <HeroThumbnail hero={currentBattle.hero2} />
            <div className="Battle__heroName">{currentBattle.hero2}</div>
          </div>
        </div>
        <div className="Battle__results">
          {userVote === "hero1" || userVote === "hero2" ? (
            <div className="Battle__votes">
              <ResultsBar
                percentage={hero1percentage}
                category={categoryFormatted}
              />{" "}
              {currentBattle.hero1votes.length} votes
            </div>
          ) : null}
          {userVote === "hero1" || userVote === "hero2" ? (
            <div className="Battle__votes">
              <ResultsBar
                percentage={hero2percentage}
                category={categoryFormatted}
              />{" "}
              {currentBattle.hero2votes.length} votes
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>{battleContent}</div>
    </div>
  );
};
Battle.propTypes = {
  category: PropTypes.string.isRequired,
  battles: PropTypes.array,
  selectHero: PropTypes.func.isRequired,
  heroSelected: PropTypes.number.isRequired,
  dateVoted: PropTypes.string
};
const mapStateToProps = state => ({
  battles: state.battle.battles,
  auth: state.auth
});

export default connect(mapStateToProps)(Battle);
