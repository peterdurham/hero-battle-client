import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import "../../assets/scss/main.scss";
import { getHeroes } from "../../actions/heroActions";

import HeroDetails from "./HeroDetails";
import HeroPreview from "./HeroPreview";
import Sidenav from "./Sidenav";
import HeroList from "./HeroList";

class Heroes extends Component {
  state = {
    sidenavCategory: null,
    viewSelected: null,
    heroes: []
  };

  componentDidMount() {
    this.props.getHeroes();
  }
  selectCategory = category => {
    if (category !== this.state.sidenavCategory) {
      this.setState({ sidenavCategory: category });
      if (category === "All") {
        this.props.history.push("/heroes/all");
      } else if (category === "Video Games") {
        this.props.history.push("/heroes/videogames");
      } else if (category === "Movies") {
        this.props.history.push("/heroes/movies");
      } else if (category === "Superheroes") {
        this.props.history.push("/heroes/superheroes");
      } else if (category === "Mythology") {
        this.props.history.push("/heroes/mythology");
      }
    } else {
      this.setState({ sidenavCategory: null });
      if (this.state.sidenavCategory !== "All") {
        this.props.history.push("/heroes/all");
      }
    }
  };

  selectView = input => {
    this.setState({ viewSelected: input });
  };

  render() {
    let { sidenavCategory } = this.state;
    const { heroes } = this.props;

    let formattedHeroes;
    if (heroes.length > 0) {
      formattedHeroes = heroes.map(hero => {
        hero.formatted = hero.name.replace(/-|\s/g, "").toLowerCase();
        return hero;
      });
    }

    return (
      <div className="Heroes">
        <div className="Heroes__container">
          <div>
            {heroes.length > 0 && (
              <Sidenav
                selectCategory={this.selectCategory}
                heroes={heroes}
                sidenavCategory={sidenavCategory}
                formattedHeroes={formattedHeroes}
                selectView={this.selectView}
                viewSelected={this.state.viewSelected}
              />
            )}
          </div>
          <Switch>
            <Redirect exact from="/heroes" to="/heroes/all" />

            <Route
              path="/heroes/all"
              render={() => (
                <HeroList category="All" selectView={this.selectView} />
              )}
            />
            <Route
              path="/heroes/videogames"
              render={() => (
                <HeroPreview
                  category="Video Games"
                  selectView={this.selectView}
                />
              )}
            />
            <Route
              path="/heroes/movies"
              render={() => (
                <HeroPreview category="Movies" selectView={this.selectView} />
              )}
            />
            <Route
              path="/heroes/superheroes"
              render={() => (
                <HeroPreview
                  category="Superheroes"
                  selectView={this.selectView}
                />
              )}
            />
            <Route
              path="/heroes/mythology"
              render={() => (
                <HeroPreview
                  category="Mythology"
                  selectView={this.selectView}
                />
              )}
            />
            <Route
              path="/heroes/:name"
              render={() => (
                <HeroDetails
                  hero={this.state.viewSelected}
                  url={this.props.location.pathname}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}
Heroes.propTypes = {
  getHeroes: PropTypes.func.isRequired,
  heroes: PropTypes.array
};

const mapStateToProps = state => ({
  heroes: state.hero.heroes
});

export default connect(
  mapStateToProps,
  { getHeroes }
)(Heroes);
