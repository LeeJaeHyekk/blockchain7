import logo from "./logo.svg";
import "./App.css";
import React, { Children, useState } from "react";
import styled from "styled-components";
import Search from "./Components/Search";
import Menu from "./Components/Menu";
import Login from "./Components/Login";
import TakList from "./Components/TakList";

function App() {
  const [arr, setArr] = useState([
    "op.gg",
    "리그오브레전드",
    "데스크톱",
    "발로란트",
    "배틀그라운드",
    "오버워치",
    "이터널 리턴",
    "이스포츠 전적",
    "톡피지지",
    "Duo",
  ]);
  const [logarr, setLogArr] = useState(["화이트모드", "언어", "로그인"]);
  const [limoarr, setLimoArr] = useState([
    "홈",
    "챔피언분석",
    "게임모드",
    "통계",
    "랭킹",
    "프로관전",
    "멀티서치",
    "커뮤니티",
  ]);
  return (
    <>
      <Div>
        <AppElem>
          <div>
            <Menu arr={arr} />
          </div>
          <Logdiv>
            <Login logarr={logarr} />
          </Logdiv>
        </AppElem>
        <Limo>
          <TakList limoarr={limoarr} />
        </Limo>
        <MainImg>
          <Img></Img>
        </MainImg>
        <SearchDiv>
          <MainSearch />
        </SearchDiv>
      </Div>
    </>
  );
}

// map으로 바꾸고 , 목차들을 state로 바꾸고  // 데이터 기준으로 바꿔보자 변수를 넣고

export default App;
const Div = styled.div`
  background-color: #5383e8;
`;

const AppElem = styled.div`
  display: flex;
  color: white;
  background-color: #5383e8;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  & > div {
    display: flex;

    justify-content: space-between;
    align-items: center;
    column-gap: 30px;
  }
`;
const Logdiv = styled.div`
  column-gap: normal;
  display: flex;
  column-gap: 30px;
  padding: 25px 0;
`;
const Limo = styled.div`
  display: flex;
  height: 50px;
  color: white;
  background-color: #5383e8;
  justify-content: start;
  align-items: center;
  gap: 10px;
  padding-left: 100px;
  border-bottom: 1px solid #4171d6;
`;
const MainImg = styled.div`
  display: flex;
  width: 1080px;
  height: 460px;
  background-color: #5383e8;
  margin-left: 20%;
  justify-content: center;
  align-items: center;
`;
const Img = styled.div`
  display: flex;
  width: 63%;
  height: 63%;
  background-image: url("/img/op.ggImg.png");
  background-size: contain;
  background-repeat: no-repeat;
`;
const SearchDiv = styled.div`
  display: flex;
  width: 1080px;
  height: 100px;
  margin-left: 20%;
  justify-content: top;
  align-items: center;
`;
const MainSearch = styled.div`
  display: flex;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 /19%);
  background: #fff;
  width: 80%;
  height: 60px;
  border: 1px solid white;
  border-radius: 30px;
`;
// const MenuBar = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const MenuBar2 = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: row;
//   width: 450px;
// `;
// const Menu = styled.div`
//   flex-wrap: wrap;
//   display: inline;
//   width: 90px;
//   height: 30px;
//   background-color: #2f5ec0;
//   border: 1px solid black;
//   font-size: 12px;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   margin: auto;
// `;
// const MenuCheck = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   width: 90px;
//   height: 30px;
//   background-color: #2f5ec0;
//   border: 1px solid black;
//   font-size: 12px;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   margin: auto;
// `;
// const MainImg = styled.div`
//   display: flex;
//   background-color: black;
//   align-items: center;
//   justify-content: center;
//   width: 1080px;
//   height: 224px;
// `;
// const Search = styled.div``;
