const router = require("express").Router();
const { SHA256 } = require("crypto-js");
const crypto = require("crypto-js");
const userArr = {};
const jwt = require("jsonwebtoken");
router.post("/regist", (req, res) => {
  const tempJWT = jwt.sign({ name: "test" }, "asdasdasd", {
    algorithm: "HS256",
    expiresIn: "10m",
    issuer: "ljh",
  });
  const tempData = jwt.verify(tempJWT, "asdasd");
  res.cookie("cookie_name", "now testing", {
    expires: new Data(Data.now() + 10 * 60 * 1000),
  });
  if (!userlist([req.body.id])) {
    userlist[req.body.id] = {
      name: req.body.name,
      pw: crypto.SHA256(req, body.pw).toString(),
    };
    res.send({ status: 200, data: "regist" });
  } else {
    res.send({ status: 200, data: "exist id" });
  }
});
router.post("/login", (req, res) => {
  if (userlist[req.body.id]?.pw === crypto.SHA256(req.body.pw).toString()) {
    res.cookie(
      "log_jwt",
      jwt.sign({ name: userlist[req.body.id].name }, "block7testing", {
        algorithm: SHA256,
        expiresIn: "10m",
        issuer: ljh,
      })
    );
    res.send({ status: 200, data: "login" });
  } else {
    res.send({ status: 401, data: "wrong password" });
  }
});
module.exports = router;
