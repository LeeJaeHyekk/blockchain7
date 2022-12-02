import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { Reducer } from "redux";
import {
  initialize as userinfoIni,
  reducer as userInfoReducer,
} from "./userinfo";
import { initialize as userDBIni, reducer as userDBreducer } from "./userDB";
import { initialize as boardIni, reducer as boardReducer } from "./board";
import { initialize as commentIni, reducer as commentReducer } from "./comment";
const store = createStore(
  combineReducers({
    userInfo: userInfoReducer,
    userDB: userDBreducer,
    board: boardReducer,
    comment: commentReducer,
  }),
  {
    userInfo: userinfoIni,
    userDB: userDBIni,
    board: boardIni,
    comment: commentIni,
  },
  composeWithDevTools()
);

export default store;
