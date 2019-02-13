import React from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import "../../assets/scss/main.scss";
import Versus from "../../assets/images/Versus.png";

import HeroThumbnail from "../imageComponents/HeroThumbnail";
import ResultsBar from "./ResultsBar";

const Battle = ({
  category,
  selectHero,
  heroSelected,
  auth,
  todaysBattles
}) => {
  let battleContent;
  let currentBattle;
  let userId = auth.user.id;
  let userVote;

  if (!todaysBattles) {
    battleContent = <h1>loading...</h1>;
  } else {
    currentBattle = todaysBattles.filter(
      battle => battle.category === category
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
        <div onClick={() => selectHero(1, category)} className="Battle__hero1">
          <div className="Battle__category">{category}</div>
          <div className="Battle__hero1details">
            <div className="Battle__heroName">{currentBattle.hero1}</div>

            {userVote === "hero1" || userVote === "hero2" ? (
              <div className="Battle__hero1results">
                <ResultsBar
                  percentage={hero1percentage}
                  category={categoryFormatted}
                />{" "}
                <div className="Battle__votes">
                  {currentBattle.hero1votes.length} votes
                </div>
              </div>
            ) : null}
          </div>
          <div className="Battle__hero1image">
            <div
              className={
                (heroSelected === 1 || userVote === "hero1"
                  ? "Battle__selected "
                  : "") + "Battle__hero"
              }
            >
              <HeroThumbnail hero={currentBattle.hero1} />
            </div>
          </div>
        </div>

        <div className="Battle__versus">
          <img src={Versus} className="Battle__versus--image" alt="versus" />
        </div>

        <div onClick={() => selectHero(2, category)} className="Battle__hero2">
          <div className="Battle__hero2image">
            <div
              className={
                (heroSelected === 2 || userVote === "hero2"
                  ? "Battle__selected "
                  : "") + "Battle__hero"
              }
            >
              <HeroThumbnail hero={currentBattle.hero2} />
            </div>
          </div>
          <div className="Battle__hero2details">
            <div className="Battle__heroName">{currentBattle.hero2}</div>
            {userVote === "hero1" || userVote === "hero2" ? (
              <div className="Battle__hero2results">
                <ResultsBar
                  percentage={hero2percentage}
                  category={categoryFormatted}
                />
                <div className="Battle__votes">
                  {currentBattle.hero2votes.length} votes
                </div>
              </div>
            ) : null}
          </div>
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
  selectHero: PropTypes.func.isRequired,
  heroSelected: PropTypes.number.isRequired,
  dateVoted: PropTypes.string
};
const mapStateToProps = state => ({
  auth: state.auth,
  todaysBattles: state.battle.todaysBattles
});

export default connect(mapStateToProps)(Battle);
