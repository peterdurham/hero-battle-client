import React, { Component } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../assets/scss/main.scss";

class Sidebar extends Component {
  render() {
    const {
      selectCategory,
      heroes,
      sidebarCategory,
      formattedHeroes,
      selectView,
      viewSelected
    } = this.props;

    let vgLinks;
    let movieLinks;
    let superheroLinks;
    let mythologyLinks;

    let vgHeroes;
    let movieHeroes;
    let superheroes;
    let mythologyHeroes;
    if (heroes) {
      vgHeroes = heroes.filter(hero => hero.category === "Video Games");
      movieHeroes = heroes.filter(hero => hero.category === "Movies");
      superheroes = heroes.filter(hero => hero.category === "Superheroes");
      mythologyHeroes = heroes.filter(hero => hero.category === "Mythology");
    }

    // if (heroes.length > 0 && sidebarCategory === "All") {
    //   allHeroesLinks = (
    //     <div>
    //       {formattedHeroes.map(hero => {
    //         const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
    //         return (
    //           <div
    //             key={hero.name}
    //             onClick={() => selectView(hero.name)}
    //             className="Sidebar__label"
    //           >
    //             <Link
    //               to={`/heroes/${formatted}`}
    //               className="Sidebar__hero--link"
    //             >
    //               {hero.name}
    //             </Link>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   );
    // }

    if (heroes.length > 0 && sidebarCategory === "Video Games") {
      vgLinks = (
        <div>
          {formattedHeroes
            .filter(item => item.category === "Video Games")
            .map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <div
                  key={hero.name}
                  onClick={() => selectView(hero.name)}
                  className={
                    (viewSelected === hero.name
                      ? "Sidebar__hero--selected "
                      : "") + "Sidebar__label"
                  }
                >
                  <Link
                    to={`/heroes/${formatted}`}
                    className="Sidebar__hero--link"
                  >
                    {hero.name}
                  </Link>
                </div>
              );
            })}
        </div>
      );
    }

    if (heroes.length > 0 && sidebarCategory === "Movies") {
      movieLinks = (
        <div>
          {formattedHeroes
            .filter(item => item.category === "Movies")
            .map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <div
                  key={hero.name}
                  onClick={() => selectView(hero.name)}
                  className={
                    (viewSelected === hero.name
                      ? "Sidebar__hero--selected "
                      : "") + "Sidebar__label"
                  }
                >
                  <Link
                    to={`/heroes/${formatted}`}
                    className="Sidebar__hero--link"
                  >
                    {hero.name}
                  </Link>
                </div>
              );
            })}
        </div>
      );
    }
    if (heroes.length > 0 && sidebarCategory === "Superheroes") {
      superheroLinks = (
        <div>
          {formattedHeroes
            .filter(item => item.category === "Superheroes")
            .map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <div
                  key={hero.name}
                  onClick={() => selectView(hero.name)}
                  className={
                    (viewSelected === hero.name
                      ? "Sidebar__hero--selected "
                      : "") + "Sidebar__label"
                  }
                >
                  <Link
                    to={`/heroes/${formatted}`}
                    className="Sidebar__hero--link"
                  >
                    {hero.name}
                  </Link>
                </div>
              );
            })}
        </div>
      );
    }

    if (heroes.length > 0 && sidebarCategory === "Mythology") {
      mythologyLinks = (
        <div>
          {formattedHeroes
            .filter(item => item.category === "Mythology")
            .map(hero => {
              const formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
              return (
                <div
                  key={hero.name}
                  onClick={() => selectView(hero.name)}
                  className={
                    (viewSelected === hero.name
                      ? "Sidebar__hero--selected "
                      : "") + "Sidebar__label"
                  }
                >
                  <Link
                    to={`/heroes/${formatted}`}
                    className="Sidebar__hero--link"
                  >
                    {hero.name}
                  </Link>
                </div>
              );
            })}
        </div>
      );
    }

    return (
      <div className="Sidebar">
        <div className="Sidebar__title">Heroes</div>
        <div
          onClick={() => selectCategory("Video Games")}
          className="Sidebar__label"
        >
          <Link
            to="/heroes/videogames"
            className={
              (sidebarCategory === "Video Games"
                ? "Sidebar__link--selected "
                : "") + "Sidebar__link"
            }
          >
            Video Games ({vgHeroes.length})
          </Link>
        </div>
        {vgLinks}
        <div
          onClick={() => selectCategory("Movies")}
          className="Sidebar__label"
        >
          <Link
            to="heroes/movies"
            className={
              (sidebarCategory === "Movies" ? "Sidebar__link--selected " : "") +
              "Sidebar__link"
            }
          >
            Movies ({movieHeroes.length})
          </Link>
        </div>
        {movieLinks}
        <div
          onClick={() => selectCategory("Superheroes")}
          className="Sidebar__label"
        >
          <Link
            to="heroes/superheroes"
            className={
              (sidebarCategory === "Superheroes"
                ? "Sidebar__link--selected "
                : "") + "Sidebar__link"
            }
          >
            Superheroes ({superheroes.length})
          </Link>
        </div>
        {superheroLinks}
        <div
          onClick={() => selectCategory("Mythology")}
          className="Sidebar__label"
        >
          <Link
            to="heroes/mythology"
            className={
              (sidebarCategory === "Mythology"
                ? "Sidebar__link--selected "
                : "") + "Sidebar__link"
            }
          >
            Mythology ({mythologyHeroes.length})
          </Link>
        </div>
        {mythologyLinks}
      </div>
    );
  }
}
Sidebar.propTypes = {
  heroes: PropTypes.array.isRequired
};

export default Sidebar;
