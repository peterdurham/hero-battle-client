import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";
import { Link } from "react-router-dom";
import HeroThumbnail from "../imageComponents/HeroThumbnail";

class HeroPreview extends Component {
  shortenName = name => {
    let formatted = name
      .replace(/-|\s/g, "")
      .trim()
      .toLowerCase();
    return formatted;
  };

  render() {
    const { heroes, category, selectView } = this.props;

    const videoGameHeroes = heroes.filter(
      hero => hero.category === "Video Games"
    );
    const movieHeroes = heroes.filter(hero => hero.category === "Movies");
    const superheroes = heroes.filter(hero => hero.category === "Superheroes");
    const mythologyHeroes = heroes.filter(
      hero => hero.category === "Mythology"
    );
    let heroDisplay;
    let vgDisplay;
    let moviesDisplay;
    let superDisplay;
    let mythologyDisplay;
    if (heroes.length > 0) {
      vgDisplay = (
        <div className="HeroPreview__display">
          <div className="HeroPreview__label">Video Game Heroes</div>
          <div className="HeroPreview__heroes">
            {videoGameHeroes.map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <Link
                  to={`/heroes/${formatted}`}
                  className="HeroPreview__card"
                  key={hero.name}
                >
                  <div onClick={() => selectView(hero.name)}>
                    <HeroThumbnail hero={hero.name} />
                    {hero.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );

      moviesDisplay = (
        <div className="HeroPreview__display">
          <div className="HeroPreview__label">Movie Heroes</div>
          <div className="HeroPreview__heroes">
            {movieHeroes.map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <Link
                  to={`/heroes/${formatted}`}
                  className="HeroPreview__card"
                  key={hero.name}
                >
                  <div onClick={() => selectView(hero.name)}>
                    <HeroThumbnail hero={hero.name} />
                    {hero.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
      superDisplay = (
        <div className="HeroPreview__display">
          <div className="HeroPreview__label">Superheroes</div>
          <div className="HeroPreview__heroes">
            {superheroes.map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <Link
                  to={`/heroes/${formatted}`}
                  className="HeroPreview__card"
                  key={hero.name}
                >
                  <div onClick={() => selectView(hero.name)}>
                    <HeroThumbnail hero={hero.name} />
                    {hero.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
      mythologyDisplay = (
        <div className="HeroPreview__display">
          <div className="HeroPreview__label">Mythology Heroes</div>
          <div className="HeroPreview__heroes">
            {mythologyHeroes.map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <Link
                  to={`/heroes/${formatted}`}
                  className="HeroPreview__card"
                  key={hero.name}
                >
                  <div onClick={() => selectView(hero.name)}>
                    <HeroThumbnail hero={hero.name} />
                    {hero.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      );
      if (category === "All") {
        heroDisplay = (
          <div>
            {vgDisplay} {moviesDisplay} {superDisplay} {mythologyDisplay}
          </div>
        );
      }
      if (category === "Video Games") {
        heroDisplay = vgDisplay;
      } else if (category === "Movies") {
        heroDisplay = moviesDisplay;
      } else if (category === "Superheroes") {
        heroDisplay = superDisplay;
      } else if (category === "Mythology") {
        heroDisplay = mythologyDisplay;
      }
    }

    return (
      <div>
        <div>{heroDisplay}</div>
      </div>
    );
  }
}
HeroPreview.propTypes = {
  category: PropTypes.string.isRequired,
  heroes: PropTypes.array.isRequired,
  selectView: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  heroes: state.hero.heroes
});

export default connect(mapStateToProps)(HeroPreview);
