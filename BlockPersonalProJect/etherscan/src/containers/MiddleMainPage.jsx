import styled from "styled-components";
import LatestBlocksContaniner from "./LatestBlocks";
import MainBack from "../components/MainBack";
import LatestTransactionContaniner from "./LatestTransaction";
import MiddleMiddle from "../components/MiddleMiddleComp";
import { newBlock } from "../api";
import { useEffect } from "react";
const MiddleMainPageContainer = () => {
  const start = async () => {
    await newBlock();
  };
  useEffect(() => {
    start();
  }, []);
  return (
    <MainBlock>
      <MainBack />
      <MiddleMiddle />
      <Test>
        <LatestBlocksContaniner />
        <LatestTransactionContaniner />
      </Test>
    </MainBlock>
  );
};

export default MiddleMainPageContainer;
const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Test = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & > div:first-child {
    display: flex;
    flex-direction: column;

    justify-content: center;
    width: 50%;
    align-items: center;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }
`;
