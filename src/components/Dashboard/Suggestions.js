import React, { Component } from "react";
import "../../assets/scss/main.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../actions/profileActions";
import { clearErrors } from "../../actions/authActions";
import {
  suggestHero,
  getSuggestions,
  voteOnSuggestion
} from "../../actions/heroActions";

import dateToString from "../../utils/dateToString";
import Spinner from "../common/Spinner";
import ProfileDisplay from "./ProfileDisplay";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";

class Suggestions extends Component {
  state = {
    category: "",
    heroName: "",
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getSuggestions();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    const { errors, clearErrors } = this.props;
    if (errors.heroName || errors.category) {
      clearErrors();
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const date = new Date();
    const formatted = dateToString(date);
    const suggestionData = {
      category: this.state.category,
      heroName: this.state.heroName,
      user: this.props.auth.user.id,
      date: formatted
    };

    if (this.state.category !== "0" && this.state.category) {
      this.props.suggestHero(suggestionData);

      setTimeout(() => {
        if (!this.props.errors.heroName && !this.props.errors.category) {
          this.props.getSuggestions();
        }
      }, 775);
    } else {
      let newErrors = { ...this.state.errors };
      newErrors.category = "Please select a category";
      this.setState({ errors: newErrors });
    }

    // CALL API/SUGGESTIONS route action here
    // this.props.createProfile(profileData, this.props.history);
  };

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    const { suggestions } = this.props;

    const options = [
      { label: "* Select Hero Category", value: 0 },
      { label: "Video Games", value: "Video Games" },
      { label: "Movies", value: "Movies" },
      { label: "Superheroes", value: "Superheroes" },
      { label: "Mythology", value: "Mythology" }
    ];

    let suggestionsContent;
    let profileContent;
    if (profile === null || loading) {
      suggestionsContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        suggestionsContent = (
          <div className="Suggestions__content">
            <form onSubmit={this.onSubmit} className="Suggestions__form">
              <SelectListGroup
                placeholder="Category"
                name="category"
                value={this.state.category}
                onChange={this.onChange}
                options={options}
                error={errors.category}
                info=""
              />
              <br />
              <TextFieldGroup
                placeholder="Hero Name"
                name="heroName"
                value={this.state.heroName}
                onChange={this.onChange}
                error={errors.heroName}
                info=""
              />
              <input
                type="submit"
                value="Submit"
                className="Suggestions__submit"
              />
            </form>
            <div className="Suggestions__display">
              <div className="Suggestions__videogames">
                <div className="Suggestions__label">Video Games</div>

                <div className="Suggestions__options">
                  {suggestions
                    .filter(item => item.category === "Video Games")
                    .sort(
                      (a, b) =>
                        Number(b.upVotes.length - b.downVotes.length) -
                        Number(a.upVotes.length - a.downVotes.length)
                    )
                    .map((item, index) => (
                      <div key={index} className="Suggestions__hero">
                        <div className="Suggestions__voting">
                          <i
                            className={
                              (item.upVotes.indexOf(user.id) > -1
                                ? "Suggestions__upvote--selected "
                                : "") +
                              "fa fa-arrow-circle-up Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "up"
                              })
                            }
                          />

                          <div className="Suggestions__hero--votes">
                            {item.upVotes.length - item.downVotes.length}
                          </div>

                          <i
                            className={
                              (item.downVotes.indexOf(user.id) > -1
                                ? "Suggestions__downvote--selected "
                                : "") +
                              "fa fa-arrow-circle-down Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "down"
                              })
                            }
                          />
                        </div>
                        <div className="Suggestions__hero--name">
                          {item.heroName}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="Suggestions__movies">
                <div className="Suggestions__label">Movies</div>
                <div className="Suggestions__options">
                  {suggestions
                    .filter(item => item.category === "Movies")
                    .sort(
                      (a, b) =>
                        Number(b.upVotes.length - b.downVotes.length) -
                        Number(a.upVotes.length - a.downVotes.length)
                    )
                    .map((item, index) => (
                      <div key={index} className="Suggestions__hero">
                        <div className="Suggestions__voting">
                          <i
                            className={
                              (item.upVotes.indexOf(user.id) > -1
                                ? "Suggestions__upvote--selected "
                                : "") +
                              "fa fa-arrow-circle-up Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "up"
                              })
                            }
                          />

                          <div className="Suggestions__hero--votes">
                            {item.upVotes.length - item.downVotes.length}
                          </div>

                          <i
                            className={
                              (item.downVotes.indexOf(user.id) > -1
                                ? "Suggestions__downvote--selected "
                                : "") +
                              "fa fa-arrow-circle-down Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "down"
                              })
                            }
                          />
                        </div>
                        <div className="Suggestions__hero--name">
                          {item.heroName}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="Suggestions__superheroes">
                <div className="Suggestions__label">Superheroes</div>
                <div className="Suggestions__options">
                  {suggestions
                    .filter(item => item.category === "Superheroes")
                    .sort(
                      (a, b) =>
                        Number(b.upVotes.length - b.downVotes.length) -
                        Number(a.upVotes.length - a.downVotes.length)
                    )
                    .map((item, index) => (
                      <div key={index} className="Suggestions__hero">
                        <div className="Suggestions__voting">
                          <i
                            className={
                              (item.upVotes.indexOf(user.id) > -1
                                ? "Suggestions__upvote--selected "
                                : "") +
                              "fa fa-arrow-circle-up Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "up"
                              })
                            }
                          />

                          <div className="Suggestions__hero--votes">
                            {item.upVotes.length - item.downVotes.length}
                          </div>

                          <i
                            className={
                              (item.downVotes.indexOf(user.id) > -1
                                ? "Suggestions__downvote--selected "
                                : "") +
                              "fa fa-arrow-circle-down Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "down"
                              })
                            }
                          />
                        </div>
                        <div className="Suggestions__hero--name">
                          {item.heroName}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="Suggestions__mythology">
                <div className="Suggestions__label">Mythology</div>
                <div className="Suggestions__options">
                  {suggestions
                    .filter(item => item.category === "Mythology")
                    .sort(
                      (a, b) =>
                        Number(b.upVotes.length - b.downVotes.length) -
                        Number(a.upVotes.length - a.downVotes.length)
                    )
                    .map((item, index) => (
                      <div key={index} className="Suggestions__hero">
                        <div className="Suggestions__voting">
                          <i
                            className={
                              (item.upVotes.indexOf(user.id) > -1
                                ? "Suggestions__upvote--selected "
                                : "") +
                              "fa fa-arrow-circle-up Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "up"
                              })
                            }
                          />

                          <div className="Suggestions__hero--votes">
                            {item.upVotes.length - item.downVotes.length}
                          </div>

                          <i
                            className={
                              (item.downVotes.indexOf(user.id) > -1
                                ? "Suggestions__downvote--selected "
                                : "") +
                              "fa fa-arrow-circle-down Suggestions__icon"
                            }
                            onClick={() =>
                              this.props.voteOnSuggestion(item._id, {
                                voteType: "down"
                              })
                            }
                          />
                        </div>
                        <div className="Suggestions__hero--name">
                          {item.heroName}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        suggestionsContent = (
          <div className="Dashboard__noprofile">
            <p className="Dashboard__noprofile--welcome">Welcome {user.name}</p>
            <p className="Dashboard__noprofile--text">
              You have not yet setup a profile, please add some info
            </p>
            <Link to="/create-profile" className="Dashboard__noprofile--link">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="Suggestions">
        <div className="Dashboard__nav">
          <Link to="/dashboard" className="Dashboard__navlink">
            Back to Profile
          </Link>
        </div>

        <div className="Dashboard__title">Hero Suggestions</div>
        <div>{suggestionsContent}</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  battles: state.battle.battles,
  suggestions: state.hero.suggestions,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  {
    getCurrentProfile,
    suggestHero,
    getSuggestions,
    voteOnSuggestion,
    clearErrors
  }
)(Suggestions);
