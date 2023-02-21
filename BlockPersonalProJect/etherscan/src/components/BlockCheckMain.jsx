import styled from "styled-components";

const BlockComponent = (accounts) => {
  // const request = axios.create({
  //   baseURL: "http://localhost:8080",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // });
  // if (window.ethereum) {
  //   const isConnected = window.ethereum.isConnected();
  //   const balance = ethereum.request({
  //     method: "eth_getBalance",
  //     params: accounts,
  //   });
  //   const from = ethereum.request({
  //     method: "eth_sendTransaction",
  //     params: [{ from, to, value }],
  //   });
  //   const
  // }
  // return (
  //   <Block>
  //     <label>
  //       miner:
  //       <input type="text" onInput={funcs.miner}></input>
  //     </label>
  //     <label>
  //       timestamp:
  //       <input type="text" onInput={funcs.timestamp}></input>
  //     </label>
  //     <label>
  //       nonce:
  //       <input type="text" onInput={funcs.nonce}></input>
  //     </label>
  //     <label>
  //       Size:
  //       <input type="text" onInput={funcs.size}></input>
  //     </label>
  //     <label>
  //       Gas Limit:
  //       <input type="text" onInput={funcs.gasLimit} />
  //     </label>
  //     <button onClick={checkBlock}>확인</button>
  //   </Block>
  //   );
};
export default BlockComponent;

const Block = styled.div`
  & > label {
    display: block;
  }
`;
