const Web3 = require("web3");

let instance;
// 복사된 임시값

class Client {
  constructor(_url) {
    if (instance) return instance;
    this.web3 = new Web3(_url);
    instance = this;
  }
}
module.exports = Client;
