import { GET_BATTLES, SUBMIT_VOTE } from "../actions/types";

const initialState = {
  battles: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BATTLES:
      return {
        ...state,
        battles: action.payload
      };
    case SUBMIT_VOTE:
      return {
        ...state
      };
    default:
      return state;
  }
}
