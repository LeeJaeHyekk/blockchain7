// npm => node package manager
// Node.js에서 사용하는 라이브러리 관리자
// yarn(React)도 사용가능
// npm install 라이브러리명
// packager.json : Node.js를 사용해 구현된 프로그램(모듈,라이브러리,...)에 대한 정보를 모아둔 파일

// const express = require("express");
// require는 외부 라이브러리를 가져오는 함수
// 매개변수로 라이브러리명을 전달한다.
// const app = express();
// app.get("/", (req, res) => {
// req는 요청 사항 , 요청의 데이터
// res는
// res.send("hi");
// });
// app.listen(8080, () => {
//   console.log("서버 열음");
// });

// call back= :hover , onclik(on 이벤트), set timeout
//  비동기 처리 =   1. 제이커리의 ajax 함수 2.setTimeout
const cusMath = require("./cosMath");

console.log(cusMath.sum(1, 2));
console.log(cusMath.multiply(1, 2));

const express = require("express");
//  서버 생성을 위한 라이브러리
const session = require("express-session");
// 세션을 위한 라이브러리 << 세션은 나중에
const morgan = require("morgan");
// 호그를 위한 라이브러리
const dotenv = require("dotenv");
// 환경 설정 파일을 로드하기 위한 라이브러리
const path = require("path");
// 결로 내장 모듈
const cookieParser = require("cookie-parser");
// 쿠키를 위한 라이브러리 << 세션과 같이 나중에

dotenv.config();
// 환경설정 파일 로드

const app = express();
//  app :  서버에 대한 정보를 가지고 있는 객체
// 서버 생성
app.set("port", process.env.port || 8080);
// prosess는 프로그램에 대한 정보를 갖고 있다.
// prosess는 프로그램에
// 서버 내의 프로퍼티 초기화
app.use((req, res, next) => {
  // use << 미들 웨어 이다
  // 서버에 접근하면 해당 코드가 실행된다.
  if (process.env.NODE_ENV === "producthion")
    morgan("combined")(req, res, next);
  // morgan을 사용할때 combined는 배포용으로 사용된다.
  else morgan("dev")(req, res, next);
  // dev는 개발 모드로 사용된다
});
app.use("/", express.static(path.join(__dirname, "public")));
//  / : 서버의 루트 즉 서버에 접근시에 라우터가 없을때
// 라우터란? 서버내의 폴더
//  서버의 하위 페이지를 구현할때 사용한다.
//  ********/router 식으로 표현한다.
// static은 전역, 기본적으로 연결할 폴더를 설정한다.
// public 촐더로이동합니다.
app.listen(app.get("port"), () => {
  // 서버를 시작한다.
  // 요청을 받기 시작한다.

  console.log("서버를 열었습니다");
});

app, use(express.json());
// 더이터를 주고 받을때 json 형식을 사용한다.
// 안넣으면 텍스트(string) 방식으로 된다.
app.use(express.urlencoded({ extended: false }));
// querystring을 파싱할 때 사용한 압법을 설정
// 모듈을 사용하지 않음
app.use(
  session({
    // 세션 설정
    resave: false,
    // 요청마다 세션을 재설정 할것인가?
    saveUninitialized: false,
    // 요청에 대해 세션에 작업할 것인가?
    secret: process.env.cookie_secret,
    // 암호화  << 후에 자세히 할 예정
    cookie: {
      //  쿠키는 어떻게 저장할 것인가?
      httpOnly: true,
      // http 에서만 사용한다.
      secure: false,
      // https인가?
    },
    name: "session-cookie",
    // 쿠키에서의 이름
  })
);
// ------------------------------서버의 기본 설정------------------------------
//
//
//
// 쿠키란? 허락해줄꺼냐?? 사용자의 정보를 임시 저장한다. 데이터란 간단한 텍스트 : 영상이나 이미지는 포함하지 않는다.
// 쿠키 vs 캐시
// cache 캐시 << 이미지, 영상 들을 임시로 저장하는 공간
// 캐시는 파일로 저장된다.
// 세션이?
// 쿠키랑 같은 기능을 한다. // 텍스트를  임시로 저장한다.
// 쿠키는 로컬에 저장한다. 브라우저에서 관리 , 세션은 서버에 저장한다. 서버에서 관리
// 미들웨어란?
// 프로그램 실행에 있어서 중간에 포함되는 작업
