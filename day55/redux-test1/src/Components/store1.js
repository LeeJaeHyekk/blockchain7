import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducer";
const store = createStore(
  reducer,
  { count1: 1, count2: 1 }, // input없이 plus,minus 작성하기
  composeWithDevTools()
);
export default store;

// 컴포넌트가 아니기 때문에 , store.js 대문자로 쓰지않고 파스칼 표기법 사용
// (reducer(dispatch넘겨 받은 데이터를 state값으로 받음), {} , compose)
