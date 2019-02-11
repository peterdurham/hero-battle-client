import axios from "axios";

import { GET_BATTLES, SUBMIT_VOTE, GET_TODAYS_BATTLES } from "./types";

// const URL = "https://safe-mesa-80973.herokuapp.com";
const URL = "";
// Get ALL Battles
export const getBattles = () => dispatch => {
  axios
    .get(`${URL}/api/battles`)
    .then(res =>
      dispatch({
        type: GET_BATTLES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BATTLES,
        payload: null
      })
    );
};

// Get Todays Battles
export const getTodaysBattles = () => dispatch => {
  axios
    .get(`${URL}/api/battles/today`)
    .then(res =>
      dispatch({
        type: GET_TODAYS_BATTLES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TODAYS_BATTLES,
        payload: null
      })
    );
};

export const submitVote = (updatedBattles, user) => dispatch => {
  axios
    .post(`${URL}/api/battles/votes/${user}`, updatedBattles)
    .then(res =>
      dispatch({
        type: SUBMIT_VOTE
      })
    )
    .catch(err =>
      dispatch({
        type: SUBMIT_VOTE,
        payload: err.data
      })
    );
};

export const createBattle = battle => dispatch => {
  axios
    .post(`${URL}/api/battles/`, battle)
    .then(res =>
      dispatch({
        type: SUBMIT_VOTE
      })
    )
    .catch(err =>
      dispatch({
        type: SUBMIT_VOTE,
        payload: err.data
      })
    );
};
