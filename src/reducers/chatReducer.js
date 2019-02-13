import { SEND_MESSAGE, GET_MESSAGES } from "../actions/types";

const initialState = {
  messages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    default:
      return state;
  }
}
