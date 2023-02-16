import { useState } from "react";
import { newBlock } from "../api";
import BlockComponent from "../components/BlockCheckMain";

const BlockContainer = () => {
  const [blockData, setBlockData] = useState({
    blockHash: "",
    miner: "",
    timestamp: "",
    nonce: "",
    size: "",
    gasLimit: "",
  });
  const blockHash = (e) => {
    setBlockData((state) => ({ ...state, blockHash: e.target.value }));
  };
  const miner = (e) => {
    setBlockData((state) => ({ ...state, miner: e.target.value }));
  };
  const timestamp = (e) => {
    setBlockData((state) => ({ ...state, timestamp: e.target.value }));
  };
  const nonce = (e) => {
    setBlockData((state) => ({ ...state, nonce: e.target.value }));
  };
  const size = (e) => {
    setBlockData((state) => ({ ...state, size: e.target.value }));
  };
  const gasLimit = (e) => {
    setBlockData((state) => ({ ...state, gasLimit: e.target.value }));
  };
  const check = async () => {
    const result = await newBlock(blockData);
  };
  return (
    <BlockComponent
      funcs={{ blockHash, miner, timestamp, nonce, size, gasLimit }}
      checkBlock={check}
    />
  );
};
export default BlockContainer;
