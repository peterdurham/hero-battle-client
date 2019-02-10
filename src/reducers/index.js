import { combineReducers } from "redux";

import battleReducer from "./battleReducer";
import heroReducer from "./heroReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  battle: battleReducer,
  hero: heroReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});
