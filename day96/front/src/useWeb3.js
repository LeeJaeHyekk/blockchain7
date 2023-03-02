// 0x6da61bdbbaeb4984688f5feb9dcd4c1df4fef5a1
import { useState, useEffect } from "react";
import Web3 from "web3";
const useWeb3 = () => {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState();
  useEffect(() => {
    (async () => {
      if (!window.ethereum) return;
      //   메타마스크가 설치되지 않았으면 끝내라
      const [address] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(address);
      const _web3 = new Web3(window.ethereum);
      setWeb3(_web3);
      //  메타마스크와 연결
    })();
    // (함수)() : 즉시 실행함수, 함수를 바로 실행한다.
  }, []);
  return [web3, account];
};
export default useWeb3;

// 컴포넌트가 아니다 => html이 아니다. 커스텀훅( 보통 앞에 use를 붙인다.)
