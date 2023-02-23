import styled from "styled-components";

const AddTxComp = ({ txAll }) => {
  return (
    <>
      {txAll.map(({ hash, from, to, value, id }, idx) => {
        return (
          <TxBlock
            id={id}
            txhash={hash}
            txfrom={from}
            txto={to}
            txvalue={value}
            key={idx}
          />
        );
      })}
    </>
  );
};
export default AddTxComp;

const TxBlock = ({ id, txhash, txfrom, txto, txvalue }) => {
  return (
    <LatestTxBox>
      <div>
        <img src="/img/transaction.png" />
      </div>
      <div>
        <div>#{id}</div>
        <div>{txhash}</div>
        <div>{txfrom}</div>
        <div>{txto}</div>
        <div>{txvalue}</div>
      </div>
    </LatestTxBox>
  );
};

const LatestTxBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
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
    background-color: white;
    justify-content: space-around;
    border-radius: 2px;
    align-items: center;
    gap: 2%;
    overflow: hidden;

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
