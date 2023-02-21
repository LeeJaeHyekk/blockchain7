import styled from "styled-components";
import LatestBlocksContaniner from "./LatestBlocks";
import MainBack from "../components/MainBack";
import LatestTransactionContaniner from "./LatestTransaction";
const MiddleMainPageContainer = () => {
  return (
    <MainBlock>
      <MainBack />
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
`;
