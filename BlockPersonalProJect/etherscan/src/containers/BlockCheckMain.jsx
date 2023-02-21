import { useState } from "react";
import { newBlock } from "../api";
import BlockComponent from "../components/BlockCheckMain";
const BlockContainer = () => {
  const [blockData, setBlockData] = useState({});
  const check = async () => {
    const result = await newBlock(blockData);
  };
  return <BlockComponent checkBlock={check} />;
};
export default BlockContainer;
