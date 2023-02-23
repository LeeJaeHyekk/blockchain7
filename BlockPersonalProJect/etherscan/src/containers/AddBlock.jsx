import axios from "axios";
import { useState, useEffect } from "react";
import { latestBlock, latestTx } from "../api";
import AddBlockComp from "../components/AddBlockComponent";
import AddTxComp from "../components/AddTxComp";

const AddBlock = () => {
  const [blockAll, setBlockAll] = useState([]);

  useEffect(() => {
    const block = async () => {
      const lBData = await latestBlock();
      console.log(lBData);
      let tempBlock = lBData.block;
      setBlockAll(tempBlock);
      console.log(tempBlock);
    };
    block();
  }, []);
  return (
    <>
      <AddBlockComp blockAll={blockAll} />
    </>
  );
};

const AddTx = () => {
  const [txAll, setTxAll] = useState([]);

  const transaction = async () => {
    const lTData = await latestTx();
    let tempTx = lTData.latesttx;
    setTxAll(tempTx);
  };
  useEffect(() => {
    transaction();
  }, []);
  useEffect(() => {}, [txAll]);

  return (
    <>
      <AddTxComp txAll={txAll} />
    </>
  );
};

export { AddBlock, AddTx };
