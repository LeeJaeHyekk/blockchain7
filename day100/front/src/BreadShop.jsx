import { useEffect, useState } from "react";
import BreadShopContract from "./contracts/BreadShop.json";
export const BreadShop = ({ web3, account }) => {
  const [bread, setBread] = useState(0);
  const [deployed, setDeployed] = useState();
  const [CA, setCA] = useState();

  const construtor = async () => {
    if (!web3) return;
    const networkId = await web3.eth.net.getId();
    // 아이디를 받아온다.
    const _CA = BreadShopContract.networks[networkId].address;
    // 불러오는 주소를 _매개변수화 해서 아이디의 주소를 변수에 저장
    setCA(_CA);
    // _CA를 useState 변수로 적용
    const abi = BreadShopContract.abi;
    // abi는 json의 abi를 가져온다.
    const _deployed = new web3.eth.Contract(abi, _CA);
    // abi와 _CA 를 가지고 배포해서 transaction을 만듬
    setDeployed(_deployed);
    // 배포함
    const _bread = await _deployed.methods.getBread().call({ from: account });
    // _bread 를 sol에 주소를 넣어서 getBread()를 실행
    setBread(_bread);
    // 상태값 저장
    const temp = await _deployed.methods.getSender().call({ from: account });
    // 주소를 넣고
    console.log(temp);
  };

  const buy = async () => {
    console.log(deployed);
    await deployed.methods
      .buyBread()
      .send({ from: account, to: CA, value: web3.utils.toWei("1") });
  };
  const sell = async () => {
    await deployed.methods.sellBread().send({ from: account, to: CA });
  };

  useEffect(() => {
    construtor();
  }, []);
  return (
    <div>
      <div>현재 빵 개수:{bread}</div>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>sell</button>
    </div>
  );
};
