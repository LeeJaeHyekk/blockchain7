const { Transaction } = require("../models");
const router = require("express").Router();

router.post("/listTx", async (req, res) => {
  try {
    const listtx = await Transaction.findAll({
      attributes: ["from", "to", "value", "gasPrice"],
    });
    res.send({ listtx });
  } catch (error) {
    console.log(err);
  }
});

router.post("/latest", async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      limit: 10,
      attributes: ["hash", "from", "to", "value"],
    });

    res.send({ transaction });
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
