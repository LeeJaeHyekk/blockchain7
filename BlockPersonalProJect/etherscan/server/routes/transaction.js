const router = require("express").Router();
const { Transaction } = require("../models");
router.post("/listTx", async (req, res) => {
  try {
    const listtx = await Transaction.findAll({
      attributes: ["from", "to", "value", "gasPrice", "blockNumber", "hash"],
    });
    res.send({ listtx });
  } catch (error) {
    console.log(err);
  }
});

router.post("/latest", async (req, res) => {
  try {
    const latesttx = await Transaction.findAll({
      limit: 10,
      order: [["id", "DESC"]],
      attributes: ["hash", "from", "to", "value", "id"],
    });
    res.send({ latesttx });
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
