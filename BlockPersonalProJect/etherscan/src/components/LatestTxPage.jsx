import { useEffect, useState } from "react";
import { listTx } from "../api";
import styled from "styled-components";
const LatesTxPage = () => {
  const [txList, setTxList] = useState([]);
  useEffect(() => {
    const Txlist = async () => {
      const listTData = await listTx();
      let tempTxList = listTData.listtx;
      console.log(tempTxList);
      setTxList(tempTxList);
    };
    Txlist();
  }, []);
  return (
    <>
      {txList?.map(({ hash, blockNumber, from, to, value, gasPrice }) => (
        <LTB
          hash={hash}
          blocknumber={blockNumber}
          from={from}
          to={to}
          value={value}
          gasPrice={gasPrice}
        />
      ))}
    </>
  );
};
export default LatesTxPage;

const LTPBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 2%;
  flex-direction: column;
  & > div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    gap: 2%;
  }
`;

const LTB = ({ hash, blocknumber, from, to, value, gasPrice }) => {
  return (
    <LTPBlock>
      <div>
        <div>{hash}</div>
        <div>#{blocknumber}</div>
        <div>{from}</div>
        <div>{">"}</div>
        <div>{to}</div>
        <div>{value}</div>
        <div>{gasPrice}</div>
      </div>
    </LTPBlock>
  );
};
