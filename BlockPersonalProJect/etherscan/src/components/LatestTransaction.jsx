import styled from "styled-components";

const LastestTransactionHeader = () => {
  return (
    <LatestBlock>
      <div>Latest Transactions</div>
    </LatestBlock>
  );
};
export default LastestTransactionHeader;

const LatestBlock = styled.div`
  & > div {
    display: flex;
    font-size: 1.3rem;
    width: 80%;
    border: 1px solid black;
    border-bottom: none;
    z-index: 3;
  }
`;
