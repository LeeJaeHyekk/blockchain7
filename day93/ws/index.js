const express = require("express");
const Web3 = require("web3");
const app = express();
const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8081")
);
web3.eth.subscribe("newBlockHeaders", (error, result) => {
  if (!error) {
    console.log(result);
  }
});
app.listen(8080, () => {
  console.log("8080 server open");
});
