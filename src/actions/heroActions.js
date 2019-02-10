import axios from "axios";

import {
  GET_HEROES,
  GET_SUGGESTIONS,
  ADD_SUGGESTION,
  GET_ERRORS
} from "./types";

const URL = "https://safe-mesa-80973.herokuapp.com";

export const getHeroes = () => dispatch => {
  axios
    .get(`${URL}/api/heroes`)
    .then(res =>
      dispatch({
        type: GET_HEROES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_HEROES,
        payload: null
      })
    );
};

export const suggestHero = hero => dispatch => {
  axios
    .post(`${URL}/api/heroes/suggestions`, hero)
    .then(res =>
      dispatch({
        type: ADD_SUGGESTION
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_SUGGESTION,
        payload: null
      })
    );
};

export const getSuggestions = () => dispatch => {
  axios
    .get(`${URL}/api/heroes/suggestions`)
    .then(res =>
      dispatch({
        type: GET_SUGGESTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SUGGESTIONS,
        payload: null
      })
    );
};

export const voteOnSuggestion = (suggestionId, voteType) => dispatch => {
  axios
    .post(`/api/heroes/suggestions/${suggestionId}`, voteType)
    .then(res => dispatch(getSuggestions()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
