import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  initialize as userinfoIni,
  reducer as userInfoReducer,
} from "./userinfo";
import { initialize as userDBIni, reducer as userDBreducer } from "./userDB";
const store = createStore(
  combineReducers({ userInfo: userInfoReducer, userDB: userDBreducer }),
  { userInfo: userinfoIni, userDB: userDBIni },
  composeWithDevTools()
);
export default store;
