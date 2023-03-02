const Compiler = require("./compiler");
const Client = require("./web3");
// console.log(Compiler.compile("Test.sol"));

const {
  Test: { abi, bytecode },
} = Compiler.compile("Test.sol");
console.log(abi);
const client = new Client("http://127.0.0.1:8545");
const txObj = { data: bytecode };
const contract = new client.web3.eth.Contract(abi);

async function init() {
  const instance = await contract.deploy(txObj).send({
    // deploy : 전개하다.(블록체인 배포할때 사용)
    from: "0xe617294F9822733ED157A943173370A5CBEaf320",
    gas: 1000000,
  });
  console.log(instance);
  console.log(instance.options.address); // CA

  // 트랜잭션이 생길때 만들어지는 hash
  // 0xb0dc8aeb6f55ed3be655df35beec2b91f14db84e;
}
init();
async function test() {
  const accounts = await client.web3.eth.getAccounts();
  // console.log(accounts);
  const ca = "0x1FAb45F0fb32b660aFdF7C41a9dDa27ecEdB4Abd";
  const deployed = new client.web3.eth.Contract(abi, ca);
  let text = await deployed.methods.getText().call();
  // console.log(text);
  await deployed.methods.setText("what is lunch").send({ from: accounts[1] });
  text = await deployed.methods.getText().call();
  // console.log("text", text);
  const balance = await client.web3.eth.getBalance(accounts[1]);
  // console.log(balance);
}
test();
