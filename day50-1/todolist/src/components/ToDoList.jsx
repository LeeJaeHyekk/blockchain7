import styled from "styled-components";
import Limote from "../components/Limote";
import Model from "../components/Model";

function ToDoList() {
  return (
    <List>
      <div>
        <Limote />
      </div>
      <div>
        <Model />
      </div>
    </List>
  );
}
export default ToDoList;

const List = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 600px;
  & > div {
    width: 50%;
    & > div {
      width: 50%;
    }
  }
`;
