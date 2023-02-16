import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import UserBox from "./component/UserBox";
import BoardBox from "./component/BoardBox";

function App() {
  return (
    <AppBox>
      <UserBox />
      <BoardBox />
    </AppBox>
  );
}

const AppBox = styled.div``;

export default App;
