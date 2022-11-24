import styled from "styled-components";
import { TodoBtn } from "../setting";
import { useState } from "react";
import List from "./List/index";
import Todomodal from "./Todomodal";
import { Link, Route, Routes } from "react-router-dom";
// export 시 default를 쓰지 않으면 {} 를 사용해 구조분해 할당 형식으로 가져와야 한다.

export default function Todo() {
  const [list, setList] = useState([
    // list로(변수값 설정)와 setlist로(useState 설정값 저장) 설정하고 초기값을 설정
    { name: "자두과자", status: 0 },
    { name: "자두과자1", status: 1 },
    { name: "자두과자2", status: 2 },
  ]);
  return (
    <div>
      <h1>Todo list </h1>
      <AddBtnBox>
        <Link to={"add"}>
          {/* 주소로 보내주고 */}
          <TodoBtn className="sky"> Add task</TodoBtn>
        </Link>
      </AddBtnBox>
      {/* addBox(글자 중앙 배치) -> link() -> todoBtn*/}
      <List list={list} setList={setList} />
      <Routes>
        {/* Routes는  */}
        <Route
          path={"add"}
          // 주소로 받고
          element={<Todomodal setList={setList} func={"Add"} />}
          // 주소로 받았으면 element 연결해 준다.
        ></Route>
        <Route
          path={"edit"}
          element={<Todomodal setList={setList} func={"Edit"} />}
        ></Route>
      </Routes>
    </div>
  );
}
const AddBtnBox = styled.div`
  text-align: right;
`;
