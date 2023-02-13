const request = axios.create({
  method: "POST",
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});
//
let accounts = [];
let isCreating = false;
let interval;
//
let accountElm = document.getElementById("account");
let balanceElm = document.getElementById("wallet-balance");
let mineStartElm = document.getElementById("miner-start");
let mineStopElm = document.getElementById("miner-stop");
let walletListElm = document.getElementById("wallet-list");
let newWalletPwElm = document.getElementById("new-wallet-Pw");
//

async function getBalance(_account) {
  const {
    data: { result },
  } = await request({
    data: {
      id: 50,
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [_account, "latest"],
    },
  });
  balanceElm.innerHTML =
    parseInt(parseInt(result, 16) / Math.pow(10, 15)) / 1000;
}

async function getWallet(_account) {
  accountElm.innerHTML = _account;
  await getBalance(_account);
  accounts.forEach((item) => {
    if (item !== _account) {
      selectElem.innerHTML += `<option value="${item}">${item}</option>`;
    }
  });
}
//
document.forms["walletForms"].onsubmit = async (e) => {
  e.preventDefault();
  if (newWalletPwElm.length < 5) return;
  await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "personal_newAccount",
      params: newWalletPwElm.value,
    },
  });
  //   await getAccounts();
  newWalletPwElm.value = "";
  isCreating = false;
};
getWallet();
//
async function getAccounts() {
  const {
    data: { result },
  } = await request({
    data: {
      id: 1337,
      jsonrpc: "2.0",
      method: "eth_accounts",
    },
  });
  walletListElm.innerHTML = "";
  result.forEach((item) => {
    walletListElm.innerHTML += `<li onclick="getWallet('${item}')">${item}</li>`;
  });
}
getAccounts();

mineStartElm.onclick = async function minestart() {
  console.log("채굴시작");
  await request({
    data: {
      id: 50,
      jsonrpc: "2.0",
      method: "miner_setEtherbase",
      params: [accountElm.innerHTML],
    },
  });
  await request({
    data: { id: 50, jsonrpc: "2.0", method: "miner_start" },
  });
  interval = setInterval(() => {
    // balance 받아오기
  });
};

mineStopElm.onclick = async function minestop() {
  console.log("채굴종료");
  await request({
    data: {
      id: 50,
      jsonrpc: "2.0",
      method: "miner_stop",
    },
  });
  clearInterval(interval);
  interval = undefined;
};
document.forms["transaction"].onsubmit = async function (e) {
  e.preventDefault();
  let to = selectElem.value;
  if (e.target["wallet"].value) {
    to = e.target["wallet"].value;
  }
  await request({
    data: {
      id: 50,
      jsonrpc: "2.0",
      method: "personal_unlockAccount",
      params: [accountElm.innerHTML, e.target["wallet-Pw"].value],
    },
  });
  await request({
    data: {
      id: 50,
      jsonrpc: "2.0",
      method: "eth_sendTransaction",
      params: [
        {
          forms: accountElm.innerHTML,
          to,
          value:
            "0x" + (+e.target["ether"].value * Math.pow(10, 18)).toString(16),
        },
      ],
    },
  });
};
