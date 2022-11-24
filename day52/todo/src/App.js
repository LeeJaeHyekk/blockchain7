import "./App.css";
import { useState } from "react";
// useState 사용 선언
import styled from "styled-components";
// div``;스타일 사용선언
import Todo from "./components/Todo/index";
// -----------------------------------------------------------------수업----
// default는 파일 하나당 하나만 가능
// default를 쓰지 않으면 {}를 사용해 구조분해 할당 형식으로 가져와야 한다.
// export는 여러개를 내 보낼 수 있다.
// --------------------------------------------------------------------
// 여러개의 components의 export 가 있는 파일을 가져올때는 {}객체 형식으로 사용하지 않음
function App() {
  const [user, setUser] = useState(""); // 오늘의 과제
  return (
    <AppBox>
      {/* 가장 외각의 설정 (todo list가 들어가는 페이지 설정)*/}
      <Todo />
      {/* todo 페이지 설정 */}
    </AppBox>
  );
}

export default App;
const AppBox = styled.div`
  max-width: 1300px;
  margin: auto;
  &.test {
    background-color: lightgray;
    height: 100px;
  }
  @media only screen and (max-width: 1400px) {
    max-width: 1000px;
  }
  @media only screen and (max-width: 1100px) {
    max-width: 600px;
  }
  @media only screen and (max-width: 700px) {
    max-width: 300px;
  }
`;
