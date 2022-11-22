import logo from "./logo.svg";
import { useState } from "react";
import List from "./components/List";
import "./App.css";
import EffectTest from "./components/EffectTest";
// 함수형 컴포넌트는 생명주기가 약간 다르다.
// 함수형 컴포넌트는 mount, update 시에 함수 자체를 가시 호출한다.
// 클래스형 컴포넌트와 같이 state, lifecycle 메서드들을 사용하듯이 구현을 하려면 hook 매서드들을 사용해야한다.
// HOOK 메서드로는 useState, useEffect , useRef , useCallback ,useMemo
// useContext , useReductor 가 있지만 내용은 리덕트 에서
// 전부 돌아가는데  useEffect, useCallback , useMemo의 경우 상황에 따라 필요없는 코드를 실행하지 않도록 하기위해 사용

function App() {
  console.log("App");
  // mount , update 시에 할상 app이 콘솔창에 출력한다.
  let num1 = 0;
  const [num, setNum] = useState(0);

  const increase = () => {
    num1 = num1 + 1;
    setNum(num + 1);
    console.log(num1);
  };
  return (
    <div className="App">
      <div onClick={increase}>{num + 10}</div>
      <div>
        <List />
      </div>
      <div>
        <EffectTest />
      </div>
    </div>
  );
}

export default App;
