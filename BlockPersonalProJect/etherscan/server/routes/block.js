const router = require("express").Router();
const { Block } = require("../models");
router.post("/listBlock", async (req, res) => {
  try {
    const listBlock = await Block.findAll();
    res.send(listBlock);
  } catch (error) {
    console.log(error);
  }
});

router.post("/latest", async (req, res) => {
  try {
    const block = await Block.findAll({
      limit: 10,
      attributes: ["id", "hash"],
    });
    res.send({ block });
  } catch (error) {
    console.log({ isError: true });
  }
});

module.exports = router;
