const router = require("express").Router();
const block = require("./block");
const web3 = require("./web3");
const transaction = require("./transaction");

router.use("/block", block);
router.use("/web3", web3);
router.use("/transacton", transaction);

module.exports = router;
