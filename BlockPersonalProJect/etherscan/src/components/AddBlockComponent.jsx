import styled from "styled-components";
const AddBlockComp = ({ blockId, blockHash }) => {
  return (
    <LatestBox>
      <div>
        <img src="/img/redblock.gif" />
      </div>
      <div>
        <div>{blockId}</div>
        <div>{blockHash} </div>
        <div>eth</div>
      </div>
    </LatestBox>
  );
};
export default AddBlockComp;

const LatestBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 39.5%;
  justify-content: space-around;
  border: 1px solid black;
  border-top: none;
  overflow: hidden;

  & > div:first-child {
    display: flex;
    width: 10%;
    overflow: hidden;
    & > img {
      display: flex;
      width: 100%;
    }
  }

  & > div:last-child {
    display: flex;
    width: 80%;
    font-size: 1%;
    background-color: white;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;

    & > div {
      display: flex;
      border: 1px solid black;
      font-size: 1%;
      width: 30%;
    }
  }
`;
