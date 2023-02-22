import axios from "axios";
import { useState, useEffect } from "react";
import { latestBlock, latestTx, listBlock, listTx } from "../api";
import AddBlockComp from "../components/AddBlockComponent";

const Add = () => {
  const [blockHash, setBlockHash] = useState([]);
  const [blockId, setBlockId] = useState([]);
  // const [txFrom, setTxFrom] = useState([]);
  // const [txto, setTxto] = useState([]);
  // const [txvalue, setTxvalue] = useState([]);
  // const [txhash, setTxhash] = useState([]);
  const block = async () => {
    const lBData = await latestBlock();
    const listBD = await listBlock();

    for (let i = 0; i < lBData.block.length; i++) {
      setBlockHash(lBData.block[i].hash);
    }
    for (let i = 0; i < lBData.block.length; i++) {
      setBlockId(lBData.block[i].id);
    }

    // setBlockHash(lBData);
    // lBData.map((item) => setBlockHash(item));
    // console.log(listBD);
  };
  useEffect(() => {
    block();
  }, []);

  // const lTData = async () => await latestTx();
  // const listBD = async () => await listBlock();
  // const listTD = async () => await listTx();
  // const sync = async () => {
  //   const lBData = await latestBlock();
  //   const lTData = await latestTx();
  //   const listBD = await listBlock();
  //   const listTD = await listTx();
  //   console.log(lBData);
  //   // lBData.map((item) => console.log(item));
  // };

  // const AddBlock = () => {
  //    const latestblock = () => {
  //     lBData.map {
  //        setBlockHash(data.block[i].hash);
  //        blockId.push(data.block[i].id);
  //      }
  //    };
  // }

  // const AddTx = () => {
  //   const [tx, setTx] = useState({
  //     txhash: "",
  //     txFrom: "",
  //     txto: "",
  //     txvalue: "",
  //   });

  //   const sync1 = async () => {
  //     const data = await latestBlock(tx);
  //     for (let j = 0; j < data.transaction.length; j++) {
  //       txFrom.push(data.transaction[j].from);
  //       txto.push(data.transaction[j].to);
  //       txvalue.push(data.transaction[j].value);
  //       txhash.push(data.transaction[j].hash);
  //     }
  //   };
  // };

  // useEffect(() => {
  //   sync();
  // }, []);

  return (
    <div>
      <AddBlockComp blockHash={blockHash} blockId={blockId} />
    </div>
  );
};

export default Add;
