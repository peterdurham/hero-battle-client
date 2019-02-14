import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/scss/main.scss";
import PropTypes from "prop-types";

import { getHeroes } from "../../actions/heroActions";
import isEmpty from "../../utils/is-empty";

class HeroList extends Component {
  componentDidMount() {
    if (!this.props.heroes) {
      this.props.getHeroes();
    }
  }

  render() {
    const { heroes } = this.props;

    let vgHeroes;
    let movieHeroes;
    let superheroes;
    let mythologyHeroes;

    if (!isEmpty(heroes)) {
      vgHeroes = heroes.filter(hero => hero.category === "Video Games");
      movieHeroes = heroes.filter(hero => hero.category === "Movies");
      superheroes = heroes.filter(hero => hero.category === "Superheroes");
      mythologyHeroes = heroes.filter(hero => hero.category === "Mythology");
    }

    return (
      <div className="HeroList">
        <div className="HeroList__header">Current List of Heroes</div>
        <div className="HeroList__heroes">
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--vg">
              Video Games
            </div>
            {!isEmpty(heroes) && (
              <div className="HeroList__list">
                {vgHeroes.map((hero, index) => (
                  <div key={index} className="HeroList__hero">
                    {hero.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--movie">Movies</div>
            {!isEmpty(heroes) && (
              <div className="HeroList__list">
                {movieHeroes.map((hero, index) => (
                  <div key={index} className="HeroList__hero">
                    {hero.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--super">
              Superheroes
            </div>
            {!isEmpty(heroes) && (
              <div className="HeroList__list">
                {superheroes.map((hero, index) => (
                  <div key={index} className="HeroList__hero">
                    {hero.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--myth">
              Mythology
            </div>
            {!isEmpty(heroes) && (
              <div className="HeroList__list">
                {mythologyHeroes.map((hero, index) => (
                  <div key={index} className="HeroList__hero">
                    {hero.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="HeroList__message">
          * Suggest and vote on new heroes in the suggestions section
        </div>
      </div>
    );
  }
}
HeroList.propTypes = {
  heroes: PropTypes.array.isRequired,
  getHeroes: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  heroes: state.hero.heroes
});
export default connect(
  mapStateToProps,
  { getHeroes }
)(HeroList);
