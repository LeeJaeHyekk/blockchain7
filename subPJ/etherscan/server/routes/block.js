const router = require("express").Router();
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
const Geth = new Web3(new Web3.providers.HttpProvider("http://localhost:8088"));
const { Block } = require("../models/block");

router.post("/new", async (req, res) => {
  try {
    console.log("3");
    const block = await Geth.eth.getBlock();
    const latestBlock = await Geth.eth.getBlock("latest");
    console.log("4");
    console.log(latestBlock.number);
    for (let i = 0; i <= latestBlock.number; i++) {
      console.log("5");
      await Block.create({
        difficulty: block(i).difficulty,
        extraData: block(i).extraData,
        gasLimit: block(i).gasLimit,
        gasUsed: block(i).gasUsed,
        hash: block(i).hash,
        miner: block(i).miner,
        mixHash: block(i).mixHash,
        number: block(i).number,
        parentHash: block(i).parentHash,
        receiptsRoot: block(i).receiptsRoot,
        size: block(i).size,
        stateRoot: block(i).stateRoot,
        totalDifficulty: block(i).totalDifficulty,
      });
      console.log("BT", block(i).transactions);
      // if (block(i).transactions == 0) {
      //   for (j = 0; j < block(i).transactions.length; j++) {
      //     getTransaction();
      //   }
      // }
    }
    // await Block.create({});
    // res.send("good");
  } catch (error) {
    res.send({ isError: true });
  }
});

module.exports = router;
