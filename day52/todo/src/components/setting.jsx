import styled from "styled-components";
export const TodoBtn = styled.div`
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &.todo {
    color: gray;
    border-color: gray;
  }
  &.in-progress {
    color: orange;
    border-color: orange;
  }
  &.complete {
    color: green;
    border-color: green;
  }
  &.sky {
    color: #0dcaf0;
    border-color: #0dcaf0;
  }
  &.on {
    color: black;
    &.todo {
      background-color: gray;
    }
    &.in-progress {
      background-color: orange;
    }
    &.complete {
      background-color: green;
    }
  }
`;
// 버튼 환경설정
export const STATUS = { ToDo: 0, InProgress: 1, Complete: 2 };
// 버튼의 종류(리스트의 상태 설정) 1.todo(할것) 2.inprogress(진행중인것) 3.Complete(완성한것)
export const STATUSLIST = ["ToDo", "In Progress", "Complete"];
// 버튼의 종류(상태설정) 이지만 배열로 사용하기 위해 만듬
// -----------------------------------------------------------수업-----
// 외부에서 쓰기 편하게
// 전부 대문자인 변수명 : 고정된 설정값이다. === 개발자들끼리의 규칙이다.

// --------------------------
// link 주소를 이행하는 친구 routes 는 액션을 수행하는친구
// props를 이용해서 수정 기능에 접근한다 후 func 를 이용해서 길을 나눠 적용

//키포인트 최대치 == ( 값을 박을수 있냐 - remove) 를 구현할수 있냐?  map,useState
