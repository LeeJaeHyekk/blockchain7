import { useEffect, useState } from "react";
import CountContract from "./contracts/Counter.json";
const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState();
  useEffect(() => {
    (async () => {
      if (deployed) return;
      const _deployed = new web3.eth.Contract(
        CountContract.abi,
        "0x63c2eede32c3c917b470d8de29630b3559d53ee3"
      );
      setDeployed(_deployed);
      const _count = await _deployed.methods.getCount().call();
      setCount(parseInt(_count));
    })();
  }, []);
  const increment = async () => {
    const result = await deployed.methods.increment().send({ from: account });
    if (!result) return;
    const _count = await deployed.methods.getCount().call();
    setCount(parseInt(_count));
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          increment();
        }}
      >
        +
      </button>
    </div>
  );
};
export default Counter;
