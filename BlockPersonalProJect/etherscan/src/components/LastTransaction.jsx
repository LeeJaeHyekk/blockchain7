import styled from "styled-components";
import { useState, useEffect } from "react";

const LatestTransction = () => {
  return (
    <>
      <LatestTxBox>
        <div>
          <img src="/img/transaction.png" />
        </div>
        <div>
          <div>TxId</div>
          <div>TxHash</div>
          <div>From</div>
          <div>to</div>
          <div>eth</div>
        </div>
      </LatestTxBox>
    </>
  );
};
export default LatestTransction;

const LatestTxBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
  border: 1px solid black;

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
      display: flex;

      width: 100%;
    }
  }
`;
