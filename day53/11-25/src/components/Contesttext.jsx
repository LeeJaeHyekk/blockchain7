//  useContext << 라는 Hook을 사용한다.
//  Context란 무엇인가? 전역상태 관리 이다.
//  React에서 사용하는 변수, 상태값들은 거의 대부분이 지역 변수,상태값이다.
//  특히! 상태값은 무조적 지역 스코프에 포함되어 외부로 나갈 수 없다.
//  전역 스코프에서 상태값을 쓰고 싶다. Context라는 녀석이다.
import { createContext } from "react";
const TestContext = createContext();
export default function ContextTest() {
  return (
    <TestContext.Provider>
      <Child1 />
    </TestContext.Provider>
  );
}
function Child1({}) {
  return <Child1 />;
}
function Child2({}) {
  return <Child2 />;
}
function Child3({}) {
  return <Child3 />;
}
function Child4({}) {
  return <Child4 />;
}
