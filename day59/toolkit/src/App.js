import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { action, counterThunk } from "./modules/counter";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  const isLoding = useSelector((state) => state.count.isLoding);
  const [inputCount, setCount] = useState(0);
  const [input, setInput] = useState(0);
  // const [inputTime, setTime] = useState(0);
  // value를 가져와야 한다.
  return (
    <>
      <div>{count}</div>
      {!isLoding || <div> Now Loding</div>}
      <div>
        <input
          type={"number"}
          value={input}
          onInput={({ target: { value } }) => {
            setInput(value);
          }}
        />
      </div>
      <button
        onClick={() => {
          dispatch(action.increment());
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          dispatch(action.decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(action.input(input));
          // input 메서드에 전달되는 매개변수는 payload 자체이다.
        }}
      ></button>

      <div>
        <input
          type={"number"}
          value={inputCount}
          onInput={(e) => {
            setCount(e.target.value);
          }}
          placeholder={"count"}
        />
        {/* <input
          type={"number"}
          value={inputTime}
          onInput={(e) => {
            setTime(e.target.value);
          }}
        /> */}
        <button
          onClick={() => {
            dispatch(counterThunk(inputCount));
            // counter에서 createAsyncThunk로 정의한 변수는 action함수 처럼 사용할 수 있다.
          }}
        >
          set Count
        </button>
      </div>
    </>
  );
}

export default App;
