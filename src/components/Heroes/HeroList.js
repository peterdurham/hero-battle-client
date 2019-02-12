import React, { Component } from "react";
import "../../assets/scss/main.scss";
import { connect } from "react-redux";
import { getHeroes } from "../../actions/heroActions";

class HeroList extends Component {
  componentDidMount() {
    if (!this.props.heroes) {
      this.props.getHeroes();
    }
  }

  render() {
    const { heroes } = this.props;
    const vgHeroes = heroes.filter(hero => hero.category === "Video Games");
    const movieHeroes = heroes.filter(hero => hero.category === "Movies");
    const superheroes = heroes.filter(hero => hero.category === "Superheroes");
    const mythologyHeroes = heroes.filter(
      hero => hero.category === "Mythology"
    );

    return (
      <div className="HeroList">
        <div className="HeroList__header">Current List of Heroes</div>
        <div className="HeroList__heroes">
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--vg">
              Video Games
            </div>
            <div className="HeroList__list">
              {vgHeroes.map((hero, index) => (
                <div key={index} className="HeroList__hero">
                  {hero.name}
                </div>
              ))}
            </div>
          </div>
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--movie">Movies</div>
            <div className="HeroList__list">
              {movieHeroes.map((hero, index) => (
                <div key={index} className="HeroList__hero">
                  {hero.name}
                </div>
              ))}
            </div>
          </div>
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--super">
              Superheroes
            </div>
            <div className="HeroList__list">
              {superheroes.map((hero, index) => (
                <div key={index} className="HeroList__hero">
                  {hero.name}
                </div>
              ))}
            </div>
          </div>
          <div className="HeroList__section">
            <div className="HeroList__label HeroList__label--myth">
              Mythology
            </div>
            <div className="HeroList__list">
              {mythologyHeroes.map((hero, index) => (
                <div key={index} className="HeroList__hero">
                  {hero.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="HeroList__message">
          * Suggest and vote on new heroes in the suggestions section
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.hero.heroes
});
export default connect(
  mapStateToProps,
  { getHeroes }
)(HeroList);
