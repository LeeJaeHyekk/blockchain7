import styled from "styled-components";

const LatestBlocks = () => {
  return (
    <>
      <LatestBox>
        <div>
          <img src="/img/redblock.gif" />
        </div>
        <div>
          <div>blockNumber</div>
          <div>blockHash </div>
          <div>hasTransactions</div>
        </div>
      </LatestBox>
    </>
  );
};
export default LatestBlocks;

const LatestBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-around;
  border: 1px solid black;
  text-align: center;
  overflow: hidden;

  & > div:first-child {
    display: flex;
    width: 10%;
    & > img {
      display: flex;
      width: 100%;
    }
  }

  & > div:last-child {
    display: flex;
    width: 80%;
    background-color: white;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
    text-align: center;

    & > div {
      display: flex;
      width: 30%;
      text-align: center;
      justify-content: center;
    }
  }
`;
