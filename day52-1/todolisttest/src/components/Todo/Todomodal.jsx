import styled from "styled-components";
import { useState } from "react";
import { ClickBtn } from "../setting";
import { Link } from "react-router-dom";

export default function Todomodal() {
  return (
    <TodomodalBox>
      <ClickBtn>No.1_input</ClickBtn>
      <ClickBtn>No.2_Name</ClickBtn>
      <ClickBtn>No.3_status</ClickBtn>
      <ClickBtn>No.4_edit</ClickBtn>
      <ClickBtn>No.5_delete</ClickBtn>
    </TodomodalBox>
  );
}
const TodomodalBox = styled.div`
  display: felx;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`;
