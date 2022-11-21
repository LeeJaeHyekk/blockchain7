import logo from "./logo.svg";
import "./App.css";
import React, { Children } from "react";
import styled from "styled-components";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <MenuBar>
        <Menu>OP.GG</Menu>
        <Menu>리그오브레젼드</Menu>
        <Menu>데스크톱</Menu>
        <Menu>발로란트</Menu>
        <Menu>배틀그라운드</Menu>
        <Menu>오버워치</Menu>
        <Menu>이터널리턴</Menu>
        <Menu>...</Menu>
        <Menu>햇빛</Menu>
        <Menu>지구본</Menu>
        <Menu>언어</Menu>
        <Menu>로그인</Menu>
      </MenuBar>
      <MenuBar2>
        <MenuCheck>홈</MenuCheck>
        <MenuCheck>챔피언 분석</MenuCheck>
        <MenuCheck>게임모드</MenuCheck>
        <MenuCheck>통계</MenuCheck>
        <MenuCheck>랭킹</MenuCheck>
      </MenuBar2>
      <MainImg></MainImg>
      <Search></Search>
    </div>
  );
}

export default App;
const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const MenuBar2 = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 450px;
`;
const Menu = styled.div`
  flex-wrap: wrap;
  display: inline;
  width: 90px;
  height: 30px;
  background-color: #2f5ec0;
  border: 1px solid black;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;
const MenuCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90px;
  height: 30px;
  background-color: #2f5ec0;
  border: 1px solid black;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;
const MainImg = styled.div`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 224px;
`;
const Search = styled.div``;
