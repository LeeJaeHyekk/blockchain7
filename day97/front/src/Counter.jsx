import { useState, useEffect } from "react";
import CounterContract from "./contracts/Counter.json";
import axios from "axios";

const Counter = ({ web3, account }) => {
  const [count, setCount] = useState(0);
  const [deployed, setDeployed] = useState();
  useEffect(() => {
    (async () => {
      if (deployed) return;
      // const _deployed = new web3.eth.Contract(
      //   CounterContract.abi,
      //   "0x6da61bdbbaeb4984688f5feb9dcd4c1df4fef5a1"
      // );
      const networkId = await web3.eth.net.getId();
      const CA = CounterContract.networks[networkId].address;
      const abi = CounterContract.abi;
      const _deployed = new web3.eth.Contract(abi, CA);

      setDeployed(_deployed);
      const _count = await _deployed.methods.getCount().call();
      setCount(parseInt(_count));
      web3.eth.subscribe("logs", { address: CA }).on("data", (log) => {
        // subscribe 매서드 사용해서  블록체인 네트워크에 구독,이벤트명은 logs이다.
        // solidity에서 event 이벤트명(로그를 남길 데이터/변수)를 선언하고 로그를 남길 순간에 emit으로 구독한 서버에 알린다.
        // emit으로 전달된 데이터는 log..data에 들어있다.
        // subscribe의 두번째 매개변수에 옵션을 추가할 수 있으며 address 옵션은 해당 주세요 대해서만 logs를 받는다.
        console.log(log);
        const params = [{ type: "int256", name: "count" }];
        // Solidity에서 event  선언 시 전달하는 매개변수이다.
        // Solidity에서 log로 받아오는 데이터에 대한 탑입과 변수명
        const value = web3.eth.abi.decodeLog(params, log.data);
        console.log(value);
      });
    })();
  }, []);
  const increment = async () => {
    // const result = await deployed.methods.increment().send({ from: account });
    // if (!result) return;
    // const _count = await deployed.methods.getCount().call();
    // setCount(parseInt(_count));
    const data = (
      await axios.post("http://localhost:8080/api/increment", {
        from: account,
      })
    ).data;
    await web3.eth.sendTransaction(data);
  };
  const decrement = async () => {
    const result = await deployed.methods.decrement().send({ from: account });
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
