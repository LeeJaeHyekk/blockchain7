import styled from "styled-components";
const HeaderComponent = () => {
  return (
    <>
      <HeaderBox>
        <div>
          <div>
            <img src="/img/ezgif.com-video-to-gif.gif" />
          </div>
          <div>EtherScan</div>
        </div>
        <div>
          <span>home</span>
          <span>blockChain</span>
          <span>tokcen</span>
          <span>source</span>
          <span>develop</span>
          <span>logIn</span>
        </div>
      </HeaderBox>
    </>
  );
};

const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  justify-content: space-between;
  align-items: center;
  color: black;
  box-shadow: 1.2px 1.2px 1.2px 1.2px gray;

  & > div:first-child {
    display: flex;
    width: 20%;
    height: 100%;

    & > div:first-child {
      display: flex;
      width: 50%;
      justify-content: center;
    }

    & > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & > div:last-child {
    display: flex;
    margin-right: 3%;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }
`;
export default HeaderComponent;
