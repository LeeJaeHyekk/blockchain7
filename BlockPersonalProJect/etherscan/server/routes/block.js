const router = require("express").Router();
const { Block } = require("../models");
router.post("/listBlock", async (req, res) => {
  try {
    const listBlock = await Block.findAll({
      order: [["id", "DESC"]],
      limit: 100,
    });
    console.log(listBlock);
    res.send(listBlock);
  } catch (error) {
    console.log(error);
  }
});

router.post("/latest", async (req, res) => {
  try {
    const block = await Block.findAll({
      order: [["number", "DESC"]],
      limit: 10,
    });
    res.send({ block });
  } catch (error) {
    console.log({ isError: true });
  }
});

module.exports = router;
