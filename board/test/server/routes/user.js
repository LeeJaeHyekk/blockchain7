const router = require("express").Router();
const { User } = require("../models");
router.post("/regist", async (req, res) => {
  console.log(req.body);
  const { id: userId, pw, name } = req.body;
  const tempUser = await User.findone({ where: { userId } });
  if (tempUser) {
    res.send({ isError: true, msg: "exist ID" });
  } else {
    await User.create({ userId, pw, name });
  }
  res.end();
});
