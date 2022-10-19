const express = require("express");
const session = require("express-session");
const path = require("path");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { get } = require("http");
const app = express();

dotenv.config();

app.set("port", process.env.port || 8080);

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(express.json());

app.use("/", express.static(__dirname + "/web"));
app.use(express.urlencoded({ extended: false }));
app.use();
app.listen(app.get("port"), () => {});
