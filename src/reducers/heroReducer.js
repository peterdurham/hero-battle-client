import { GET_HEROES, GET_SUGGESTIONS, ADD_SUGGESTION } from "../actions/types";

const initialState = {
  heroes: [],
  suggestions: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HEROES:
      return {
        ...state,
        heroes: action.payload
      };
    case ADD_SUGGESTION:
      return {
        ...state
      };
    case GET_SUGGESTIONS:
      return {
        ...state,
        suggestions: action.payload
      };

    default:
      return state;
  }
}
