import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";
import { getBattles } from "../../actions/battleActions";
import lastSevenDays from "../../utils/lastSevenDays";
import PastBattle from "./PastBattle";

import isEmpty from "../../utils/is-empty";

class BattleHistory extends Component {
  state = {
    pastDates: []
  };

  componentDidMount() {
    this.props.getBattles();
    const date = new Date();
    // const utcDate = new Date(date.toUTCString());
    // utcDate.setHours(utcDate.getHours() - 8);
    // const pacificDate = new Date(utcDate);

    let pastDates = lastSevenDays(date);

    this.setState({ pastDates });
  }

  render() {
    let battleResults = [[], [], [], [], [], [], []];

    if (this.props.battles) {
      battleResults = this.state.pastDates.map((date, index) => {
        return this.props.battles.filter(battle => battle.date === date);
      });
    }

    return (
      <div className="BattleHistory">
        {!isEmpty(battleResults[0]) && (
          <div>
            {battleResults.map((day, index) => {
              return (
                <div className="BattleHistory__day" key={index}>
                  {index === 0 && (
                    <div className="BattleHistory__label">
                      Yesterday's Battles:{" "}
                    </div>
                  )}
                  {index > 0 && (
                    <div className="BattleHistory__label">
                      {this.state.pastDates[index]} Battles
                    </div>
                  )}
                  {day.map(battle => (
                    <PastBattle battleDetails={battle} key={battle._id} />
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
BattleHistory.propTypes = {
  battles: PropTypes.array,
  getBattles: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  battles: state.battle.battles,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getBattles }
)(BattleHistory);
