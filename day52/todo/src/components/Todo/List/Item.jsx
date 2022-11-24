import styled from "styled-components";
import { TodoBtn } from "../../setting";
import { Link } from "react-router-dom";
import penImg from "../../img/op.ggImg.png";
import penImg2 from "../../img/op.ggImg2.png";
import { STATUSLIST } from "../../setting";

export default function Item({ item, index, setList }) {
  return (
    <ItemTr>
      {/* ---------------------번호--------------------------------- */}
      <td>{index + 1}</td>
      {/* index가 0부터 시작하기 떄문에 +1  */}
      {/* ---------------------이름---------------------------------- */}
      <td>{item.name}</td>
      {/* 아이템 이름추가 */}
      {/* ---------------------상태----------------------------------- */}
      <td>
        <TodoBtn
          className={STATUSLIST[item.status].toLowerCase().replace(" ", "-")}
          // statuslist item.status
          style={{ cursor: "default" }}
        >
          {STATUSLIST[item.status]}
        </TodoBtn>
      </td>
      {/* ----------------------수정---------------------------------- */}
      <td>
        <Link to={"/edit"} state={{ index, item }}>
          <TodoBtn style={{ backgroundColor: "#5383E8" }}>
            <img src={penImg} />
          </TodoBtn>
        </Link>
      </td>
      {/* ---------------------삭제---------------------------------- */}
      <td>
        <TodoBtn
          style={{ backgroundColor: "#5383E8" }}
          onClick={() => {
            setList((list) => {
              const before = list.slice(0, index);
              const after = list.slice(index + 1);
              return [...before, ...after];
            });
          }}
        >
          <img src={penImg2} />
        </TodoBtn>
        {/* ---------------------------------------------------------- */}
      </td>
    </ItemTr>
  );
}
const ItemTr = styled.tr`
  text-align: center;
  td {
    border-bottom: 1px solid lightgray;
    img {
      width: 50px;
      object-fit: scale-down;
    }
  }
`;

// styled={{filter:"invert(83%) sepia(38%) saturate(7994%) hue-rotate(146deg) brightness(103%) "}}
