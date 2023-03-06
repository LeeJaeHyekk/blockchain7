import { useState, useEffect } from "react";
import axios from "axios";
import CounterContract from "./constracts/Counter.json";

const Counter = () => {
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
      setCount(parseInt(_count));

      web3.eth.subscribe("log", { address: CA }).on("data", (log) => {
        console.log("log", log);
        const params = [{ type: "int256", name: "count" }];
      });
    })();
  });
};
