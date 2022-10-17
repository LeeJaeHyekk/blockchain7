// npm => node package manager
// Node.js에서 사용하는 라이브러리 관리자
// yarn(React)도 사용가능
// npm install 라이브러리명
// packager.json : Node.js를 사용해 구현된 프로그램(모듈,라이브러리,...)에 대한 정보를 모아둔 파일

const express = require("express");
// require는 외부 라이브러리를 가져오는 함수
// 매개변수로 라이브러리명을 전달한다.
const app = express();
app.get("/", (req, res) => {
  // req는 요청 사항 , 요청의 데이터
  // res는
  res.send("hi");
});
app.listen(8080, () => {
  console.log("서버 열음");
});
