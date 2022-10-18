//  const express = require("express")
import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import object from "./object/index.js";
//  as 는 앞에 export 된 이름과 뒤에 여기서 쓸 이름을 정의한다.
dotenv.config();

const app = express();
app.set("port", process.env.PORT || 8080);
app.use((raq, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, rnpmes, next);
});
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("/", express.static(path.join(__dirname, " web")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.listen(app.get("port"), () => {
  console.log("서버 열기");
});
