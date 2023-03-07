const express = require("express");
const Web3 = require("web3");
const cors = require("cors");

const app = express();
const web3 = new Web3("http://127.0.0.1:8545");
const VoteContract = require("./build/contracts/Vote.json");

app.use(cors({ origin: true, credentials: true }));
// origin : true  == 모든 주소에 대해서 * 과 같이 적용

app.use(express.json());
app.post("/api/send", async (req, res) => {
  const networkId = await web3.eth.net.getId();
  const CA = VoteContract.networks[networkId].address;
  const abi = VoteContract.abi;
  const deployed = new web3.eth.Contract(abi, CA);
  const obj = {};

  switch (req.body.method) {
    case "candidates":
      obj.candidates = await deployed.methods.candidates().call();
      break;
    case "totalVotesFor":
      obj.vote = await deployed.methods.totalVotesFor(req.body.item).call();
      obj.CA = CA;
      break;
    case "voteForCandidate":
      obj.nonce = await web3.eth.getTransactionCount(req.body.from);
      obj.to = CA;
      obj.from = req.body.from;
      obj.data = await deployed.methods
        .voteForCandidate(req.body.candidate)
        .encodeABI();
      break;
    default:
      break;
  }
  res.json(obj);

  // const result = await deployed.methods.candidates().call();
  // res.json({ candidates: result });
});

app.listen(8080, () => {
  console.log("8080 serverOpen");
});
