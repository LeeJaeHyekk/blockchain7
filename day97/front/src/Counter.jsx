import { useState, useEffect } from "react";
import axios from "axios";
import CounterContract from "./contracts/Counter.json";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState();

  useEffect(() => {
    (async () => {
      if (deployed) return;
      const networkId = await web3.eth.net.getId();

      const CA = CounterContract.networks[networkId].address;
      const abi = CounterContract.abi;
      const _deployed = new web3.eth.Contract(abi, CA);
      setDeployed(_deployed);

      const _count = await _deployed.methods.getCount().call();
      console.log("_count", _count);
      setCount(parseInt(_count));

      web3.eth.subscribe("logs", { address: CA }).on("data", (log) => {
        console.log("log", log);
        const params = [{ type: "int256", name: "count" }];
        const value = web3.eth.abi.decodeLog(params, log.data);
        console.log(value);
        setCount(value.count);
      });
    })();
  }, []);

  const increment = async () => {
    const data = (
      await axios.post("http://localhost:8080/api/increment", { from: account })
    ).data;
    await web3.eth.sendTransaction(data);
  };

  const decrement = async () => {
    const result = await deployed.methods.decrement().send({ from: account });
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
