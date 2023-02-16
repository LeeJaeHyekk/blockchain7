import styled from "styled-components";
const AddBoardComponent = ({ funcs, upload }) => {
  return (
    <AddBoardBox>
      <label>
        제목:
        <input type="text" onInput={funcs.title} />
      </label>
      <label>
        내용:
        <input type="text" onInput={funcs.text}></input>
      </label>
      <button onClick={upload}>등록</button>
    </AddBoardBox>
  );
};
export default AddBoardComponent;

const AddBoardBox = styled.div`
  label {
    display: block;
  }
`;
