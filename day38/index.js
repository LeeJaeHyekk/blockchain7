const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

const db = require("./models/index.js");

dotenv.config();
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
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
db.sequelize
  .sync({ force: true }) // DB 서버와 연결한다, force는 설정된 테이블을 강제로 생성한다.
  //    우리가 express 서버에서 설정한 테이블 데이터와  실제 DB서버의 테이블 데이터가 다를경우에 서버의 테이블을  새로 생성하기 위해 사용한다.
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

// db.NewTable11.create({
//   idx: 11,
//   name: "asdasd",
//   password: "1111",
//   id: "123132123",
// });
// SELECT
// [].find
db.NewTable11.findOne({
  where: {
    idx: 1,
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

app.listen(app.get("port"), () => {
  console.log("서버 실행중");
});
