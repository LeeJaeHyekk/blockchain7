const express = require("express");
const cors = require("cors");
const Web3 = require("web3");
const CounterContract = require("./build/contracts/Counter.json");

const app = express();
const web3 = new Web3("http://127.0.0.1:8545");

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

app.post("/api/increment", async (req, res) => {
  const from = req.body.from;
  const nonce = await web3.eth.getTransactionCount(from);
  console.log(nonce);
});
app.listen(8080, () => {
  console.log("startingSever");
});
