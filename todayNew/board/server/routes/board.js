const { Board } = require("../models");

const router = require("express").Router();

router.post("/upload", async (req, res) => {
  console.log(req.body);
  try {
    const board = await Board.create(req.body);
    res.send({ isError: false });
  } catch (error) {
    console.log({ isError: true });
  }
});

module.exports = router;
