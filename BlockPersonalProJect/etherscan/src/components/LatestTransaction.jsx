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
    display: block;
    text-align: left;
    width: 100%;
    font-size: 1.3rem;
    border-bottom: none;
    z-index: 3;
  }
`;
