import styled from "styled-components";
import { listBlock } from "../api";
import { useEffect, useState } from "react";
const LatesBlockPage = () => {
  const [blockList, setBlockList] = useState([]);
  useEffect(() => {
    const blockList = async () => {
      const listBD = await listBlock();
      let tempBlockList = listBD;
      console.log("blockList", tempBlockList);
      setBlockList(tempBlockList);
    };
    blockList();
  }, []);
  console.log(blockList);
  return (
    <>
      {blockList?.map(
        ({
          id,
          number,
          totaldifficulty,
          hash,
          extraData,
          gasLimit,
          createdAt,
          gasUsed,
          size,
        }) => (
          <LBPB
            txid={id}
            txnumber={number}
            txtotalDifficulty={totaldifficulty}
            txhash={hash}
            txextraData={extraData}
            txcreateAt={createdAt}
            txgaslimit={gasLimit}
            txgasused={gasUsed}
            txsize={size}
          />
        )
      )}
    </>
  );
};
export default LatesBlockPage;

const LBPBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    display: flex;
    width: calc(100 / 12);
    flex-direction: column;
  }
`;

const LBPB = ({
  txid,
  txnumber,
  txtotalDifficulty,
  txhash,
  txextraData,
  txcreateAt,
  txgaslimit,
  txgasused,
  txsize,
}) => {
  return (
    <LBPBlock>
      <div>block id {txnumber}</div>
      <div>
        <div>
          <div>block height : {txid}</div>
          <div>block status : {txhash}</div>
          <div>block timeStamp : {txcreateAt}</div>
          <div>block Transactions:</div>
        </div>
        <div>
          <div>block Total Difficulty :{txtotalDifficulty}</div>
          <div>block size:{txsize}</div>
        </div>
        <div>
          <div>block Gas Used:{txgasused}</div>
          <div>block Gas Limit:{txgaslimit}</div>
          <div>block Extra Data : {txextraData}</div>
        </div>
      </div>
    </LBPBlock>
  );
};
