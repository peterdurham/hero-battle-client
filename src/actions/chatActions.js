import axios from "axios";

import { SEND_MESSAGE, GET_MESSAGES, ADD_MESSAGE } from "./types";

const URL = "https://safe-mesa-80973.herokuapp.com";
// const URL = "";
export const getMessages = () => dispatch => {
  axios
    .get(`${URL}/api/chat`)
    .then(res =>
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MESSAGES,
        payload: null
      })
    );
};

export const sendMessage = message => dispatch => {
  axios
    .post(`${URL}/api/chat`, message)
    .then(res =>
      dispatch({
        type: SEND_MESSAGE,
        payload: message
      })
    )
    .catch(err =>
      dispatch({
        type: SEND_MESSAGE,
        payload: err.data
      })
    );
};

export const addMessage = message => {
  return {
    type: ADD_MESSAGE,
    payload: message
  };
};
