import "./App.css";
import Web3 from "web3";
import { useEffect, useState } from "react";
import GDToken from "./GoodiToken.json";

function App() {
  useEffect(() => {
    (async () => {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(GDToken.abi);
      const [_account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const txObj = {
        data: GDToken.bytecode,
        arguments: ["GoodiToken", "GD", 10000],
      };
      const deployed = await contract.deploy(txObj).send({
        from: _account,
        gas: 2000000,
      });
      console.log(deployed.options.address);
    })();
  }, []);

  // const [web3, setWeb3] = useState();
  // const [account, setAccount] = useState();

  return <div className="App"></div>;
}

export default App;
