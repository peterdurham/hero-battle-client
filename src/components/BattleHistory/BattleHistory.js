import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";
import { getBattles } from "../../actions/battleActions";
import lastSevenDays from "../../utils/lastSevenDays";
import PastBattle from "./PastBattle";

class BattleHistory extends Component {
  state = {
    pastDates: []
  };

  componentDidMount() {
    this.props.getBattles();
    const date = new Date();
    let pastDates = lastSevenDays(date);
    this.setState({ pastDates });
  }

  render() {
    let battle1 = [];
    let battle2 = [];
    let battle3 = [];
    let battle4 = [];
    let battle5 = [];
    let battle6 = [];
    let battle7 = [];

    if (this.props.battles) {
      battle1 = this.props.battles.filter(
        battle => battle.date === this.state.pastDates[0]
      );
      battle2 = this.props.battles.filter(
        battle => battle.date === this.state.pastDates[1]
      );
      battle3 = this.props.battles.filter(
        battle => battle.date === this.state.pastDates[2]
      );
      battle4 = this.props.battles.filter(
        battle => battle.date === this.state.pastDates[3]
      );
      battle5 = this.props.battles.filter(
        battle => battle.date === this.state.pastDates[4]
      );
      battle6 = this.props.battles.filter(
        battle => battle.date === this.state.pastDates[5]
      );
      battle7 = this.props.battles.filter(
        battle => battle.date === this.state.pastDates[6]
      );
    }

    return (
      <div className="BattleHistory">
        {/* <div className="BattleHistory__title">Battle History</div> */}
        <div className="BattleHistory__label">Yesterday's Battles: </div>
        <div className="BattleHistory__day">
          {battle1.map(battle => (
            <PastBattle battleDetails={battle} key={battle._id} />
          ))}
        </div>
        <div className="BattleHistory__label">
          {this.state.pastDates[1]} Battles
        </div>
        <div className="BattleHistory__day">
          {battle2.map(battle => (
            <PastBattle battleDetails={battle} key={battle._id} />
          ))}
        </div>
        <div className="BattleHistory__label">
          {this.state.pastDates[2]} Battles
        </div>
        <div className="BattleHistory__day">
          {battle3.map(battle => (
            <PastBattle battleDetails={battle} key={battle._id} />
          ))}
        </div>
        <div className="BattleHistory__label">
          {this.state.pastDates[3]} Battles
        </div>
        <div className="BattleHistory__day">
          {battle4.map(battle => (
            <PastBattle battleDetails={battle} key={battle._id} />
          ))}
        </div>
        <div className="BattleHistory__label">
          {this.state.pastDates[4]} Battles
        </div>
        <div className="BattleHistory__day">
          {battle5.map(battle => (
            <PastBattle battleDetails={battle} key={battle._id} />
          ))}
        </div>
        <div className="BattleHistory__label">
          {this.state.pastDates[5]} Battles
        </div>
        <div className="BattleHistory__day">
          {battle6.map(battle => (
            <PastBattle battleDetails={battle} key={battle._id} />
          ))}
        </div>
        <div className="BattleHistory__label">
          {this.state.pastDates[6]} Battles
        </div>
        <div className="BattleHistory__day">
          {battle7.map(battle => (
            <PastBattle battleDetails={battle} key={battle._id} />
          ))}
        </div>
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
