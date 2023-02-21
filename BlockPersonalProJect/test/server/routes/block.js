const router = require("express").Router();
const { Block } = require("../models");

router.post("/check", async (req, res) => {
  console.log(req.body);
  try {
    const block = await Block.create(req.body);
    res.send({ isError: false });
  } catch (error) {
    console.log({ isError: true });
  }
});

module.exports = router;
