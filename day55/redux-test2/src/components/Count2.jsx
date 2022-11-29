// Containers VS Componets
// Javascript 등의 로직 VS HTMl 구조
// 나누는 이유 가시성때문에

import { useState } from "react";
const Count2Clomp = ({ count2, plus, minus, input }) => {
  const [inputNum, setInputNum] = useState(0);
  return (
    <>
      {" "}
      <div>{count2}</div>
      <div>
        <button
          onClick={() => {
            plus();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            minus();
          }}
        >
          -
        </button>
        <div>
          <input
            type={"number"}
            value={inputNum}
            onInput={(e) => {
              setInputNum(+e.target.value);
            }}
            placeholder={"count2 input"}
          />
          <button
            onClick={() => {
              input(inputNum);
            }}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Count2Clomp;
