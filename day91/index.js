console.log(window.ethereum);
const nowAccountElem = document.getElementById("now-account");
const balanceElem = document.getElementById("balance");
const toElem = document.getElementById("to");
const etherElem = document.getElementById("ether");

if (window.ethereum) {
  const isConnected = window.ethereum.isConnected();
  console.log("javascript 읽자마자 ", isConnected);
  const getBalance = async (accounts) => {
    nowAccountElem.innerHTML = accounts[0];

    const balance = await ethereum.request({
      method: "eth_getBalance",
      params: accounts,
    });
    console.log((balanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18)));
    balanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);
  };
  ethereum.on("connect", async (connectInfo) => {
    console.log(connectInfo);
    const isConnected = window.ethereum.isConnected();
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      // nowAccountElem.innerHTML = accounts[0];
      // const balance = await ethereum.request({
      //   method: "eth_getBalance",
      //   params: accounts,
      //   //   ["0x144B210CFD706A992726D58dB87075391f4Ab10a"]
      // });
      // balanceElem.innerHTML = parseInt(balance) / Math.pow(10, 18);

      // console.log(parseInt(balance));
      await getBalance(accounts);
    } catch (error) {
      console.log(error);
    }
    console.log(parseInt(connectInfo.chainId));
  });
  document.getElementById("sendTransaction").onclick = () => {
    const from = nowAccountElem.innerHTML;
    const to = toElem.value;
    const value = "0x" + (+etherElem.value * Math.pow(10, 18)).toString(16);
    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from,
            to,
            value,
          },
        ],
      })
      .then((result) => {
        console.log(result);
        getBalance(accounts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

ethereum.on("accountsChanged", async (accounts) => {
  //   const balance = await ethereum.request({
  //     method: "eth_getBalance",
  //     params: accounts,
  //   });
  //   nowAccountElem.innerHTML = accounts[0];
  //   console.log(parseInt(balance) / Math.pow(10, 18));
  //   console.log(accounts);
  await getBalance(accounts);
});

ethereum.on("chainChanged", (chainId) => {
  console.log(chainId);
});
