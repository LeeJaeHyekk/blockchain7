const { Block, Transaction } = require("../models");
const router = require("express").Router();
const Web3 = require("web3");
const web3 = new Web3("http://localhost:8080");

router.post("/", async (req, res) => {
  try {
    const txList = await Transaction.findAll();
    res.send({ txlist: txList });
  } catch (error) {
    console.log(err);
  }
});

module.exports = router;
