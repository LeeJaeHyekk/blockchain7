const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

const db = require("./models/index.js");
const socket = require("./socket/index.js");

dotenv.config();

app.set("port", process.env.PORT || 8080);
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use("/", express.static(path.join(__dirname, "public")));
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
    name: "seed",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connection");
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(app.get("port"), () => {
  console.log("서버를 열었다");
});
socket(server);
