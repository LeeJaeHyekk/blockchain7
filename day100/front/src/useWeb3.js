import { useEffect, useState } from "react";
// import 설정
import Web3 from "web3";
// web3 설정

export const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();
  const constructor = async () => {
    if (!window.ethereum) return;
    const [_account] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(_account);
    const _web3 = new Web3(window.ethereum);
    setWeb3(_web3);
  };
  useEffect(() => {
    constructor();
  }, []);
  return [web3, account];
};
