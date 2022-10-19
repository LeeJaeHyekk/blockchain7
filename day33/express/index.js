const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();

const app = express();

app.set("port", process.env.port || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(res, req, next);
  else morgan("dev")(req, res, next);
});

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);
// post("") 요청을 받는 주소
app.listen(8080, () => {
  console.log("서버오픈");
});
// http://localhost:8080/testing
// http:// == 프로토콜 (요청에 대해허 어떤 방식으로 할것인가)
// localhost == 주소,ip 주소/도메인(DNS) 주소
// :8080 == 포트 번호
//  /testing == 라우터
//
app.post((req, res, next) => {
  console.log(req.body);
  next();
  // next => 다음 걸로 넘어가라
});
app.post("/api/user", (req, res, next) => {
  res.cookie("name", req.body.name);
  // 쿠키를 추가한다.
  res.end("ㅁㄴㅇㄹㄻ");
  // (`<div>${req.query.lunch}</div>`);
});

// get 매서드 형식을 사용할떄는 query, 즉 쿼리스트링을 사용한다.
// post 매서드 형식을 사용할때는  body로 데이터에 접근한다.
