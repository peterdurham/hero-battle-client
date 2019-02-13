import { combineReducers } from "redux";

import battleReducer from "./battleReducer";
import heroReducer from "./heroReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  battle: battleReducer,
  hero: heroReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  chat: chatReducer
});
