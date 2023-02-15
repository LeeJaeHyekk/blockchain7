import styled from "styled-components";

const AddBoardComponent = ({ changefuncs, upload }) => {
  return (
    <AddBoardBox>
      <label>
        Title :<input type="text" onInput={changefuncs.changeTitle} />
      </label>
      <label>
        Text :<input type="text" onInput={changefuncs.changeText} />
      </label>
      <button onClick={upload}>up</button>
    </AddBoardBox>
  );
};

const AddBoardBox = styled.div`
  label {
    display: block;
  }
`;
export default AddBoardComponent;
