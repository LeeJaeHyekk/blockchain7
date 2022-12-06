// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// @redux toolkit이라고 부른다.
// redux라이브러리의 업데이트 버전, 새로운 버전
// createStore가 depre
//
// import { initialize, reducer } from "./counter";
// const store = createStore(
//   combineReducers({ counter: reducer }),
//   { count: initialize },
//   composeWithDevTools()
// );
import { configureStore } from "@reduxjs/toolkit";
// toolkit사용시 createstore가 아닌 configStore를 사용한다.
// createStore와 마찬가지로 store를 반환한다.
import { reducer } from "./counter";

export const store = configureStore({
  //configureStore는 객체를 매개변수로 받으며 객체 내에서 reducer,middleware 등 store에 필효한 작업을 할 수 있다.
  reducer: { count: reducer },
  //  미들 웨어 추가시 사용
  //   getDefaultmiiddleware
  // reducer는 이전의 combineReducers와 같이 객체로 받으며 state 명을 키로, 해당 reducer를 값으로 받는다.

  //   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
