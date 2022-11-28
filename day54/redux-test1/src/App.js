import "./App.css";
import store from "./componts/store";
import { useState } from "react";

function App() {
  const [inputCount, setCount] = useState(0);
  return (
    <div className="App">
      <input
        type={"number"}
        value={inputCount}
        placeholder="number"
        onInput={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          store.dispatch({
            type: "count1/Plus",
            payload: { input: inputCount },
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count1/Minus",
            payload: { input: inputCount },
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/Plus",
            payload: {},
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "count2/Minus",
            payload: {},
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "array1/Plus",
            payload: [inputCount],
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "array1/Minus",
            payload: [inputCount],
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "array1/shift",
            payload: [inputCount],
          });
        }}
      >
        shift -
      </button>
      <button
        onClick={() => {
          store.dispatch({
            type: "array1/slice",
            payload: [inputCount],
          });
        }}
      >
        slice -
      </button>
    </div>
  );
}

export default App;

// input img 스스로 닫기 고정</>
