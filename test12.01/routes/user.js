import { Router } from "express";
import crypto from "crypto-js";
const router = Router();
const userArr = [];
const user = {};

router.post("/regist", (req, res) => {
  if (userArr.find((item) => item.userId == req.body.userId)) res.end();
  else {
    userArr.push(req.body);
    console.log(req.body);
    res.end();
  }
  // if (!userArr.find((item) => item.userId == req.body.userId))
  //   userArr.push(req.body);
  //   console.log(req.body);
  //   res.end();
  // }
});
router.post("/login", (req, res) => {
  const tempUser = userArr.find((item) => item.userId == req.body.userId);
  if (
    tempUser &&
    tempUser.userPw == req.body.userPw &&
    !user[tempUser.userId]
  ) {
    user[tempUser.userId] = crypto
      .SHA256(tempUser.userId)
      .toString(crypto.enc.Base64);
    res.cookie("user", user[tempUser.userId], {
      expires: new Date(Date.now() + 2 * 60 * 1000),
    });
    setTimeout(() => {
      user[tempUser.userId] = undefined;
    }, 2 * 60 * 1000);
    res.send({ ...tempUser, userPw: "" });
  } else res.send({ text: "아이디가 없습니다" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("user");
  user[req.body.userId] = undefined;
  res.end();
});

router.get("/check", (req, res) => {
  console.log(user);
  res.send({ userArr, user });
});
export default router;
