import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import cors from "cors";
dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(cors({ origin: "http://localhost:3000" })); //CORS 해결, 단 현재로는 단점이 있다. (모든 주소에 대해서 응답해 준다.) ({orign}) == 원본으로 지정한다.
// 원본의 주소는 해당 원본의 주소에 대해서만 요청을 응답하겠다.
// - 원본 주소에는 http와 같은 프로토콜, localhost와 같은 Domain 주소, :3000과 같은 포트까지 포함한다.
// -/api와 같은 라우터는 포함하지 않는다.

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: { httpOnly: true, secure: false },
    name: "session",
  })
);
app.use("/api", routes);
app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번째 오픈");
});
//CROS policy(정책)
//Cross Orign Resource Sharing
// 교차  원본  자원     공유   << 같은 주소가 아닌 다른 주소에서 API 요청/ 이미지 요청등 자료를 구해올 수 없다 << 보안상의 문제
// GET에서는 발생하는 경우가 없는데 POST 등에서는 거의 대부분 발생한다.
// 해결방법: proxy 라는 개념을 사용한다.
// Proxy 가 뭔가 간단히 말하면 중간 서버이다. 중간에 다른 서버에 자료를 요청해서 자기 것인것 마냥 응답으로 보낸다. << 자세한 사항은 각자 알아서 공부래 볼것.
// Http 통신의 header에서 설정을 추가하여 웹페이지의 주소에  대하여 인증을 해준다.
// 제일 쉬운 해결 방법: cors
