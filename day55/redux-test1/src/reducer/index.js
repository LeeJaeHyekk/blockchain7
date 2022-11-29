import { combineReducers } from "redux";
// combineReducers 메서드는 전달받은 reducer의 모음 객체를 하나로 묶어준다.
import count1 from "./count1";
import count2 from "./count2";
import array1 from "./arry1";
import array2 from "./array2";

export default combineReducers({ count1, count2, array1, array2 });
// 메서드는 하나로 통합된 reducer 메서드를 반환한다.

// 22.11.28 --해석--
// 계산을 해서 state 값 == {count1}을 재정의 해주는곳(변경해주는 곳) reducer 함수
