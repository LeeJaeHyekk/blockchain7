import styled from "styled-components";

const BlockComponent = ({ check }) => {
  return (
    <>
      <Block>
        <button onClick={check}>확인</button>
      </Block>
    </>
  );
};
export default BlockComponent;

const Block = styled.div`
  display: block;
`;
