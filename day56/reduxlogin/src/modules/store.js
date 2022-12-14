import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { Reducer } from "redux";
import {
  initialize as userinfoIni,
  reducer as userInfoReducer,
} from "./userinfo";
import { initialize as userDBIni, reducer as userDBreducer } from "./userDB";
import { initialize as boardIni, reducer as boardReducer } from "./board";

const store = createStore(
  combineReducers({
    userInfo: userInfoReducer,
    userDB: userDBreducer,
    board: boardReducer,
  }),
  { userInfo: userinfoIni, userDB: userDBIni, board: boardIni },
  composeWithDevTools()
);

export default store;
