import styled from "styled-components";
const LTPH = () => {
  return (
    <>
      <LTB />
    </>
  );
};
export default LTPH;

const LTPBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 3%;
  flex-direction: row;
  & > div:first-child {
    display: flex;
    font-size: 1rem;
  }
  & > div:last-child {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 3%;
  }
`;

const LTB = () => {
  return (
    <LTPBlock>
      <div>Transaction:hash</div>
      <div>Transaction:blockNumber</div>
      <div>Transaction:from</div>
      <div>{">"}</div>
      <div>Transaction:to</div>
      <div>Transaction:value</div>
      <div>Transaction:gasPrice</div>
    </LTPBlock>
  );
};
