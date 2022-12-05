import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
// redux-thunk를 불러와서

import { reducer, initialize } from "./count";

const store = createStore(
  combineReducers({ count: reducer }),
  { count: initialize },
  composeWithDevTools(applyMiddleware(reduxThunk))
  // middleWare로 추가한다.
);

export default store;

// default 일때는 {}안붙이고 , default 가 없을 떄는 {} 붙여서
