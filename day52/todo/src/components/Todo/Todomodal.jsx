import styled from "styled-components";
import { STATUS, TodoBtn } from "../setting";
import { Link, useLocation } from "react-router-dom";
import { STATUSLIST } from "../setting";
import { useState } from "react";

export default function Todomodal({ setList, func }) {
  const index = useLocation().state?.index;
  const item = useLocation().state?.item;
  const [name, setName] = useState(item ? item.name : "");
  const [status, setStatus] = useState(item ? item.state : STATUS.ToDo);
  return (
    <TodomodalBox>
      <TodomodalInnerBox>
        {/* --------------------------------input------ */}
        <div>
          <input
            type="text"
            placeholder="Task Name"
            value={name}
            //속성이다.
            onInput={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          {STATUSLIST.map((item, index) => (
            // statuslist 배열을 (아이템,위치를)
            <TodoBtn
              className={
                STATUSLIST[index].toLowerCase().replace(" ", "-") +
                // 0.1.2(todo, inprogress , complete)를 tolowercase(소문자로),(빈칸과 "-"은 뺴고 )
                (status === index ? " on" : "")
                // 상태값으로 0,1,2가 있으면 on을 붙여실행(색을 칠해준다.)
              }
              onClick={() => {
                setStatus(index);
              }}
              key={`TodoBtn-${index}`}
            >
              {item}
            </TodoBtn>
          ))}
        </div>
        <div>
          <Link to={"/"}>
            <TodoBtn
              onClick={() => {
                if (func === "Add")
                  setList((state) => [...state, { name, status }]);
                else if (func === "Edit") {
                  setList((list) => {
                    const before = list.slice(0, index);
                    const after = list.slice(index + 1);
                    return [...before, { name, status }, ...after];
                  });
                }
              }}
            >
              {func}
            </TodoBtn>
          </Link>
          <Link to={"/"}>
            <TodoBtn>Canel</TodoBtn>
          </Link>
        </div>
      </TodomodalInnerBox>
    </TodomodalBox>
  );
}
const TodomodalBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TodomodalInnerBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 30%;
  input {
    width: 100%;
    padding: 5px 10px;
  }
  & > div {
    margin: 10px 0;
    display: flex;
    justify-content: space-evenly;
    &: last-child {
      justify-content: space-between;
    }
  }
`;
