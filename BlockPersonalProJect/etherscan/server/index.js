const express = require("express");
const dotenv = require("dotenv");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const db = require("./models");
const routes = require("./routes");
const app = express();
app.use(morgan("dev"));

dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/", express.static(path.join(__dirname, "react")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "ljh",
  })
);

// app.use("/api", routes);

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("디비연결");
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(8082, () => {
  console.log("8082 server open");
});
