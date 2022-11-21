import { useState, useEffect } from "react";
export default function FuncComp({ text, func }) {
  // Hook(?)이란
  // 함수형 컴포넌트에서 클래스형 컴포넌트의 기능들을 사용하기 위해 사용하는 것을 HOOK이라고 한다.
  // HOOK은 use로 시작한다.
  // useState, UseEffect , useCallback , useMemo , useRef, useContext , useReducer 등등이 있다.
  // hook은 사용자가 구현할 수도 있다.(커스텀 훅)
  // hook 과 커스텀 훅의 차이 => html 문법으로 리턴하는가 안하는가?
  // useState 와 useEffect는 뺄수 없는 훅이다. 단 나머지는 사용하지 않아도 크게 상관은 없다.
  const [test, setTest] = useState("state test");
  // const {text , func} =props
  // props.func();
  // return <div>FuncComp{props.text}</div>
  // useState는  함수형 컴포넌트의 투톱중 하나다.
  const [study1] = useState("state1 test");
  func();

  useEffect(() => {
    // useEffect는 랜더링 후에 실행되는 롤백함수이다.
    console.log("useEffect");
  }, []);
  // useEffect는  함수형 컴모넌트 투톱중 하나
  // useEffect의 두번쨰 매개변수는 state 값의 배열을 넣는다.
  // 빈배열의 경우 componentDidMount와 같은 역활을 한다.
  useEffect(() => {
    console.log("state change");
  });
  useEffect(() => {
    console.log("test change");
    // state 중에 test 값이 변화했을떄 실행되는 메서드
  }, [study1]);
  // 두번째 매개변수 배열의 아이템으로 프로그래머가 감지하고 싶은 state(상태값)을 넣는다.
  // study1이 변경됬을때만 실행된다.
  useEffect(() => {
    console.log("test || study1 change");
    // state 중 test 또는 study1 값이 변화했을 때 실행되는 메서드
  });
  useEffect(() => {
    console.log("componentWillUnmount");
  });
  // 빈배열의 useEffect에서 함수의 return하면 componentWillUnmount와 같은 작동을 한다.
  return (
    <div
      onClick={function () {
        setTest(test + "1");
        // state :상태값, react 에서의 리랜더링(다시 그리기)의 기준이 된다
        // 단, 다시 불러올 떄 hook으로 된 함수, 함수들은 다시 부르지 않는다.
      }}
    >
      func{text}
      {test}
      {study1}
    </div>
  );
}
