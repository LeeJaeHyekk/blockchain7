const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});
// console.log(web3.eth.getAccounts());
// console.log("balance:", web3.eth.getBalance());

// let aaaa = async function () {
//   let data = await web3.eth.getAccounts();
//   let list = data.map(async (item) => await web3.eth.getBalance(item));
//   console.log("data:", list);
// };
// aaaa();

const test = async () => {
  //
  const accounts = await web3.eth.getAccounts();
  //
  for (let i = 0; i < accounts.length; ++i) {
    const balanceWei = await web3.eth.getBalance(accounts[i]);
    const balance = web3.utils.fromWei(balanceWei);
    // utils는 여러가지 편의 메서드들을 갖고 있다. 제공한다.
    // formWei 는 Wei 단위의 금액
    console.log("(" + i + ")" + accounts[i] + "(" + balanceWei + "wei)");
    console.log("(" + i + ")" + accounts[i] + "(" + balance + "eth)");
  }
  console.log("accounts:", accounts);

  document.getElementById("sendBT").onclick = async () => {
    web3.eth.txpool.content().then(console.log).catch(console.error);
    await request({
      data: {
        id: 50,
        jsonrpc: "2.0",
        method: "personal_unlockAccount",
        params: [accounts[0], "1234567890"],
      },
    });
    const transaction = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[1],
      value: web3.utils.toWei("1"),
    });

    console.log(transaction);

    const transaction1 = await web3.eth.getTransaction(
      transaction.transactionHash
    );
    console.log("tran", transaction1);
  };
  document.getElementById("stop").onclick = async function mineStop() {
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_stop",
      },
    });
  };

  document.getElementById("start").onclick = async () => {
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_setEtherbase",
        params: [accounts[0]],
      },
    });
    await request({
      data: {
        id: 1337,
        jsonrpc: "2.0",
        method: "miner_start",
      },
    });
  };
  web3.eth.extend({
    property: "txpool",
    methods: [
      {
        name: "content",
        call: "txpool_content",
      },
      {
        name: "inspect",
        call: "txpool_inspect",
      },
      {
        name: "status",
        call: "txpool_status",
      },
    ],
  });
  web3.eth.txpool.content().then(console.log).catch(console.error);
};

test();

// web3.eth
//   .getAccounts()
//   .then((data) => data.forEach((item) => console.log(item)));

// console.log("balance:", web3.eth.getBalance());

// web3.eth.getBalance().then();
