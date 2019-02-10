import { GET_BATTLES, SUBMIT_VOTE, GET_TODAYS_BATTLES } from "../actions/types";

const initialState = {
  battles: null,
  todaysBattles: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BATTLES:
      return {
        ...state,
        battles: action.payload
      };
    case GET_TODAYS_BATTLES:
      return {
        ...state,
        todaysBattles: action.payload
      };
    case SUBMIT_VOTE:
      return {
        ...state
      };
    default:
      return state;
  }
}
