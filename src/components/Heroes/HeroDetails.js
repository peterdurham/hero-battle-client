import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHeroes } from "../../actions/heroActions";
import HeroProfile from "../imageComponents/HeroProfile";
import "../../assets/scss/main.scss";
class HeroDetails extends Component {
  render() {
    const { heroes, hero, url } = this.props;

    let heroDisplay;

    if (heroes.length > 0 && hero) {
      const heroData = heroes.filter(item => item.name === hero)[0];

      heroDisplay = (
        <div className="HeroDetails__section">
          <div className="HeroDetails__name">{heroData.name}</div>{" "}
          <div className="HeroDetails__from">
            {heroData.from} ({heroData.year})
          </div>
          <HeroProfile hero={heroData.name} />
          <div className="HeroDetails__category">{heroData.category}</div>
          <div className="HeroDetails__description">{heroData.description}</div>
        </div>
      );
    } else if (heroes.length > 0) {
      const heroData = heroes.filter(item => {
        const formatted = item.name.replace(/-|\s/g, "").toLowerCase();

        return `/heroes/${formatted}` === url;
      })[0];

      heroDisplay = (
        <div className="HeroDetails__section">
          <div className="HeroDetails__name">{heroData.name}</div>{" "}
          <div className="HeroDetails__from">
            {heroData.from} ({heroData.year})
          </div>
          <HeroProfile hero={heroData.name} />
          <div className="HeroDetails__category">
            Category: {heroData.category}
          </div>
          <div className="HeroDetails__description">{heroData.description}</div>
        </div>
      );
    }
    return <div className="HeroDetails">{heroDisplay}</div>;
  }
}
HeroDetails.propTypes = {
  hero: PropTypes.string,
  heroes: PropTypes.array.isRequired,
  url: PropTypes.string,
  getHeroes: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  heroes: state.hero.heroes
});

export default connect(
  mapStateToProps,
  { getHeroes }
)(HeroDetails);
