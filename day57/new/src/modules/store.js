import { createStore, combineReducers } from "redux";
import { initialize, reducer } from "./userinfo";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ user: reducer }),
  {},
  composeWithDevTools()
);

export default store;
