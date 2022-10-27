const router = require("express").Router();
const crypto = require("crypto-js");
// const jwt = require("jsonwebtoken");
const userlist = {};

router.route("/regist").post((req, res) => {
  // 회원가입 경로
  // 암호화 해서 저장const tempJWT = ()
  if (!userlist[req.body.id]) {
    console.log(req.body.id);
    console.log(userlist);
    userlist[req.body.id] = {
      id: req.body.id,
      name: req.body.name,
      pw: crypto.SHA256(req.body.pw).toString(),
    };

    res.send({ status: 200, data: "regist" });
  } else {
    res.send({ status: 402, data: "exist" });
  }
});

router.route("/login").post((req, res) => {
  console.log(userlist[req.body.id]);
  console.log(req.body.pw);
  //  회원 가입후 로그인 경로
  if (userlist[req.body.id]?.pw === crypto.SHA256(req.body.pw).toString()) {
    res.send({ status: 200, data: "login" });
  } else {
    res.send({ status: 402, data: "sad" });
  }

  // if (!(userlist[req.body.id]?.id === req.body.id && userlist[req.body.pw]?.pw)) {
  // }
  // if (
  //   userlist[req.body.id]?.crypto.SHA256(pw) ===
  //   crypto.SHA256(req.body.pw).toString()
  // ) {
  //   console.log([body.pw]);
  //   res.send({ status: 200, data: "login" });
  // } else {

  // }

  //   res.cookie(
  //     "log_jwt",
  //   jwt.sign({ name: userlist[req.body.id].name }, "block777", {
  //     // data.data
  //       algorithm: "HS256",
  //        expiresIn: "10m",
  //      issuer: "ljh",
  //   }),
  //     {
  //        expires: new Date(Date.now() + 10000),
  //      }

  //   // res.cookie("mycookie:","set Cookie ",{maxAge:1000})
  // });

  //  }
});

module.exports = router;
