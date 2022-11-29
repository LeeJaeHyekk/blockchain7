import reducer from "./Redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, { test: "testing" }, composeWithDevTools());
export default store;
