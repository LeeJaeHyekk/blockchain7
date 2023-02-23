import styled from "styled-components";
const MainBack = () => {
  return (
    <BackBox>
      <div>
        <img src="/img/Main_Back.gif" />
      </div>
      <div>
        <div>The Ethereum Blockchain Explorer</div>
        <div>
          <span>
            <select name="All Filters" id="All_Filter">
              <option value="Addresses">Addresses</option>
              <option value="Tokens">Tokens</option>
              <option value="NameTags">NameTags</option>
              <option value="Labels">Labels</option>
              <option value="Websites">Websites</option>
            </select>
          </span>
          <span>
            <form action="">
              <span>
                <input type="text" />
              </span>
              <span>
                <button>
                  <img src="/img/search.png" />{" "}
                </button>
              </span>
            </form>
          </span>
        </div>
      </div>
    </BackBox>
  );
};

export default MainBack;

const BackBox = styled.div`
  display: block;
  width: 100%;

  & > div:first-child img {
    width: 100%;
    height: 30vh;
    opacity: 0.85;
  }
  & > div:last-child {
    position: absolute;
    width: 50%;
    top: 12%;
    left: 2%;
    font-size: 1.3rem;

    & > div:first-child {
      text-align: left;
      color: white;
    }
    & > div:last-child {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 5%;
      border: 1px solid black;
      border-radius: 8px;
      background-color: white;
      justify-content: space-between;

      & > span:first-child {
        display: flex;
        width: 30%;
        position: sticky;

        & > select {
          display: flex;
          position: sticky;
          width: 100%;
          cursor: pointer;
          border: none;
        }
      }
      & > span:last-child {
        display: flex;
        width: 70%;

        & > form {
          display: flex;
          width: 100%;
          cursor: pointer;
          justify-content: center;
          background-color: white;
          justify-content: space-between;
          & > span:nth-child(1) {
            display: flex;
            position: sticky;
            width: 85%;
            & > input {
              display: flex;
              width: 100%;
              cursor: pointer;
            }
          }
          & > span:nth-child(2) {
            display: flex;
            width: 30%;
            object-fit: cover;
            align-items: center;
            justify-content: center;
            & > button {
              width: 30%;
              border: none;
              cursor: pointer;
              & > img {
                display: flex;
                width: 100%;
                position: sticky;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
`;
