import styled from "styled-components";

function Limote() {
  return (
    <>
      {" "}
      <Div>
        <Plus>+</Plus>
        <InputDiv>
          <input type="text" />
        </InputDiv>
      </Div>
    </>
  );
}
export default Limote;

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  height: 50px;
  border: 1px solid black;
  padding: auto;
`;
const Plus = styled.div`
  display: flex;
  width: 8%;
  height: 80%;
  border: 1px solid black;
  margin: 3px 3px;
  font-size: 40px;
  justify-content: center;
  align-items: center;
`;
const InputDiv = styled.div`
  display: flex;
  width: 80%;
  & > input {
    width: 100%;
  }
`;
