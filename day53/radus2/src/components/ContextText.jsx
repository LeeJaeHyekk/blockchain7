// useContest << 라는 Hook을 사용한다.
// Context란 무엇인가? 전역상태 관리이다.
// Reactd에서 사용하는 변수, 상태값들은 거의 대부분이 지역변수, 상태값이다.
// 특히 상태값은 무조건 지역 스코프에 포함되어 외부로 나갈 수 없다. >> 지역변수와 같다.
// 전역 스코프에서 상태값을 쓰고 싶다. Context 라는 녀석이다.
import { useState, Component, useContext } from "react";
import { createContext } from "react";

const TestContext = createContext();

export default function ContextTest() {
  const [num, setNum] = useState(12);
  return (
    <TestContext.Provider value={{ num, setNum }}>
      <Child1 />;
    </TestContext.Provider>
  );
}
function Child1({}) {
  return <Child2 />;
}
function Child2({}) {
  return <Child3 />;
}
function Child3({}) {
  const item = useContext(TestContext);
  return (
    <div
      onClick={() => {
        item.setNum(item.num + 1);
      }}
    >
      (item.num)
    </div>
  );
}
