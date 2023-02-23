import styled from "styled-components";

const MiddleMiddle = ({ tx }) => {
  // {
  //   <>
  //     {tx.map(({ id }) => {
  //       <MMBox Mid={id} />;
  //     })}
  //   </>;
  // }
  return (
    <MMBox>
      <div>
        <div>
          <span>
            <img src="/img/eth.png" />
          </span>
          <div>
            <img src="/img/etherprice.png" />
          </div>
        </div>
        <div>
          <span>
            <img src="/img/world.png" />
          </span>
          <div>
            <img src="/img/marketPrice.png" />
          </div>
        </div>
      </div>
      <div>
        <div>
          <span>
            <img src="/img/transaction.png" />
          </span>
          <div> 트랜잭션수</div>
        </div>
        <div>
          <span>
            <img src="/img/gage.png" />
          </span>
          <div>라스트 블록 + 세이브 블록</div>
        </div>
      </div>
      <div>
        <img src="img/grap.png" />
      </div>
    </MMBox>
  );
};
export default MiddleMiddle;

const MMBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 90%;

  margin-top: -3%;
  justify-content: center;

  z-index: 5;
  & > div:nth-child(1) {
    display: flex;
    width: 30%;
    flex-direction: column;
    border: 1px solid black;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: none;
    background-color: white;
    & > div:nth-child(1) {
      display: flex;
      width: 100%;
      height: 44px;
      justify-content: center;
      align-items: center;
      & > span {
        width: 15%;
        & > img {
          display: flex;
          width: 60%;
          margin: 20%;
        }
      }
      & > div:nth-child(2) {
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
        & > img {
          width: 80%;
        }
      }
    }
    & > div:nth-child(2) {
      display: flex;
      flex-direction: row;
      & > span {
        width: 15%;
        & > img {
          width: 60%;
          margin: 20%;
        }
      }
      & > div {
        display: flex;
        width: 100%;
        margin-right: 40px;
        justify-content: center;
        align-items: center;
      }
    }
  }
  & > div:nth-child(2) {
    display: flex;
    width: 30%;
    flex-direction: column;
    border: 1px solid black;
    border-left: none;
    border-right: none;
    background-color: white;
    & > div:nth-child(1) {
      display: flex;
      width: 100%;

      & > span {
        width: 14%;
        & > img {
          width: 72%;
          margin: 10%;
        }
      }
      & > div:nth-child(2) {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      width: 100%;

      & > span {
        display: flex;
        width: 15%;

        & > img {
          width: 100%;
        }
      }
      & > div {
        display: flex;
        width: 100%;

        align-items: center;
        justify-content: center;
      }
    }
  }
  & > div:nth-child(3) {
    display: flex;
    width: 30%;
    flex-direction: column;
    border: 1px solid black;
    border-left: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: white;
    box-shadow: 3px 3px 3px lightgray;
    & > img {
      width: 70%;
      margin: auto;
    }
  }
`;
