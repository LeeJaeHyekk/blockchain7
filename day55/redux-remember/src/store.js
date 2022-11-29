import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import redcer from "./";

const store = createStore(
  redcer,
  { count1: 0, count2: 0 },
  composeWithDevTools()
);
export default store;
