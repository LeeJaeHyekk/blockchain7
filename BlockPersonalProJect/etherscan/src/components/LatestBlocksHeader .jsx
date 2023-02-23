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
    display: block;
    width: 100%;
    font-size: 1.3rem;
    z-index: 3;
  }
`;
