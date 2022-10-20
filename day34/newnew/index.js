import express from "express";
import cookieparser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import URL from "url";
import dotenv from "dotenv";
import session from "express-session";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();
const app = express();
app.set("port", process.env.port || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cookieparser(process.env.COOKIE_SECRET));
app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(
  session({
    require: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

// app.use("");
app.use("/api/list", listApi);

app.listen(app.get("port"), () => {
  console.log("서버를 오픈 합니다.");
});
