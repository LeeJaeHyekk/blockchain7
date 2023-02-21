import styled from "styled-components";

const LatestBlocksHeader = () => {
  return (
    <HeaderBox>
      <div>Latest Block</div>
    </HeaderBox>
  );
};

export default LatestBlocksHeader;

const HeaderBox = styled.div`
  & > div {
    display: flex;
    width: 80%;
    font-size: 1.3rem;
    border: 1px solid black;
    border-bottom: none;
    border-radius: 1px;
    z-index: 3;
  }
`;
