import styled from "styled-components";
const AddBlockComp = ({ blockAll }) => {
  return (
    <>
      {blockAll.map(({ number, hash }, idx) => (
        <Block blockId={number} blockHash={hash} key={idx} />
      ))}
    </>
  );
};
export default AddBlockComp;

const Block = ({ blockId, blockHash }) => {
  return (
    <LatestBox>
      <div>
        <img src="/img/redblock.gif" />
      </div>
      <div>
        <div>#{blockId}</div>
        <div>{blockHash} </div>
        <div>eth</div>
      </div>
    </LatestBox>
  );
};

const LatestBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
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
    white-space: nowrap;

    & > div {
      display: block;
      font-size: 0.7rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 30%;
    }
  }
`;
