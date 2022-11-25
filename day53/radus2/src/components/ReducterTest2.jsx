//useReducer를 왜 하는가?
// state / action / dispatch / reducer
// action: 요청이고(req)  어떤일을 해달라고 할지, 그 내용과 데이터를 가진 변수이다.
// type: 목적
// payload: 목적에 필요한 자료(데이터)
// dispatch: reducer가 해당 내용을 가지고작업을 한후 state에 적용한다. =>  중간과정이 추가된다. 로직을 넣을 수 있으며 입력한 데이터와 전혀 다른 데이터를 state에 정의할 수 있다.
// reducer: dispatch가 전달한 데이터로 작업을 진행한 후 경화를 state에 정의한다.

import { useReducer, useState } from "react";
import { reducer } from "./reducerTest";
export default function ReducerTest2() {
  const [count, setCount] = useState(0);
  const [count2, count2Dispatch] = useReducer(reducer, 0);
  const plus = () => {
    const tempCount = count + 1;
  };
  const minus = () => {
    const tempCount = count - 1;
  };
  const multi = () => {
    const tempCount = count * 10;
  };
  const nanugi = () => {
    const tempCount = count / 10;
  };
  return (
    <>
      <div>
        <div>count:{count}</div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multi}>*</button>
        <button onClick={nanugi}>/</button>
      </div>
      <div>count2:{count2}</div>
      <div>
        <button
          onClick={() => {
            count2Dispatch({ type: "plus" });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            count2Dispatch({ type: "minus" });
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            count2Dispatch({ type: "multi" });
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            count2Dispatch({ type: "nanugi" });
          }}
        >
          /
        </button>
      </div>
    </>
  );
}
