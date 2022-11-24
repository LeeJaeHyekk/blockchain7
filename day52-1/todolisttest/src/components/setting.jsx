import styled from "styled-components";

export const ClickBtn = styled.div`
  display: flex;
  border: 1px solid black;
  border-redius: 5px;
  padding: 5px 10px;
  box-shdow: 10px 5px 5px gray;
  cursor: point;

  &.todo {
    color: #e3ba8f;
    background-color: #e3ba8f;
  }
  &.in-progress {
    color: #a6915c;
    background-color: #a6915c;
  }
  &.complete {
    color: #825e5c;
    background-color: #825e5c;
  }
  &.on {
    color: black;
  }
`;
export const STATUS = { Todo: 0, InProgress: 1, Complete: 2 };
export const STATUSLIST = ["Todo", "In Progress", "Complete"];
