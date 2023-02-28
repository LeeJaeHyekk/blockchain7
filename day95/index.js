const Compiler = require("./compiler");
const Client = require("./web3");
console.log(Compiler.compile("Test.sol"));

const {
  Test: { abi, bytecode },
} = Compiler.compile("Test.sol");
console.log(abi);
const client = new Client("http://127.0.0.1:8545");

const txObj = { data: bytecode };
const contract = new client.web3.eth.Contract(abi);

async function init() {
  const instance = await contract.deploy(txObj).send({
    from: "0xCA759409503eFcA19641D3c49889f8C72544BF58",
    gas: 1000000,
  });
  console.log(instance);
  console.log(instance.options.address); // CA
  //   0xB0DC8AEB6F55Ed3BE655dF35BeeC2B91f14DB84E
}
// init();
async function test() {
  const accounts = await client.web3.eth.getAccounts();
  console.log(accounts);
  const ca = "0xB0DC8AEB6F55Ed3BE655dF35BeeC2B91f14DB84E";
  const deployed = new client.web3.eth.Contract(abi, ca);
  let text = await deployed.methods.getText().call();
  console.log(text);
  await deployed.methods.setText("what is lunch").send({ from: accounts[1] });
  text = await deployed.methods.getText().call();
  console.log("text", text);
  const balance = await client.web3.eth.getBalance(accounts[1]);
  console.log(balance);
}
test();
