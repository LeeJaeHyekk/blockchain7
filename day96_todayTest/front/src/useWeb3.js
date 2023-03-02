import React, { useState, useEffect } from "react";
import Web3 from "web3";
const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();
  useEffect(() => {
    (async () => {
      if (!window.ethereum) return;
      const [address] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(address);
      const _web3 = new Web3(window.ethereum);
      setWeb3(_web3);
    })();
  }, []);
  return [web3, account];
};
export default useWeb3;
