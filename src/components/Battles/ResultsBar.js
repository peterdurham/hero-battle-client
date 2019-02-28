import React, { Component } from "react";

class ResultsBar extends Component {
  render() {
    let { category } = this.props;

    let resultsClass = `ResultsBar__progress ResultsBar__${category}`;
    return (
      <div className="ResultsBar">
        <div
          data-testid="resultsbar"
          className={resultsClass}
          style={{ width: `${this.props.percentage}%` }}
        >
          {Math.floor(this.props.percentage)} %
        </div>
      </div>
    );
  }
}

export default ResultsBar;
