import styled from "styled-components";
import Item from "./Item";

export default function List({ list, setList }) {
  return (
    <ListTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Name</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          // map은 원소 하나하나를 적용할때 의미한다.
          <Item
            key={`Item-${index}`}
            item={item}
            index={index}
            setList={setList}
          />
        ))}
      </tbody>
    </ListTable>
  );
}
const ListTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    border-bottom: 1px solid black;
  }
`;
