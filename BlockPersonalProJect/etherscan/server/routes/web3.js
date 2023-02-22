const Web3 = require("web3");
const router = require("express").Router();
const web3 = new Web3("http://localhost:8080");
const { Block, Transaction } = require("../models");

router.post("/makeNew", async (req, res) => {
  if (
    (await Block.findAll()).length <= 0 &&
    (await Transaction.findAll()).length <= 0
  ) {
    try {
      await web3.eth.getBlockNumber(async (err, rtn) => {
        let latest_block_number = rtn;
        for (let i = 0; i <= latest_block_number; i++) {
          await web3.eth.getBlock(i, true, async (err, block) => {
            let NewBlock = await Block.create({
              difficulty: block.difficulty,
              extraData: block.extraData,
              gasLimit: block.gasLimit,
              gasUsed: block.gasUsed,
              hash: block.hash,
              mixhash: block.mixHash,
              nonce: block.nonce,
              number: block.number,
              parenthash: block.parentHash,
              receiptsroot: block.receiptsRoot,
              sha3uncles: block.sha3Uncles,
              size: block.size,
              stateroot: block.stateRoot,
              timestamps: block.timestamp,
              totaldifficulty: block.totalDifficulty,
            });
            if (block.transactions.length > 0) {
              await block.transactions.forEach(async (tx) => {
                let NewTransaction = await Transaction.create({
                  blockNumber: tx.blockNumber,
                  chainId: tx.chainId,
                  from: tx.from,
                  gas: tx.gas,
                  gasPrice: tx.gasPrice,
                  hash: tx.hash,
                  nonce: tx.nonce,
                  to: tx.to,
                  transactionIndex: tx.transactionIndex,
                  value: tx.value,
                });
                NewBlock.addTransaction(NewTransaction);
              });
            }
          });
        }
      });

      res.send({ isError: false });
    } catch (err) {
      res.send({ isError: true });
    }
  }
});

module.exports = router;
