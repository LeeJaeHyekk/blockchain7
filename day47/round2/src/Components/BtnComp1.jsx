import React from "react";
import styled from "styled-components";

export default function btn({ props }) {
  return <BtnnPad>{props}</BtnnPad>;
}

const BtnnPad = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-collapse: collapse;
  // div {
  //   width: 10px;
  //   height: 10px;
  //   background-color: red;
  //   &:nth-child(2) {
  //     background-color: blue;
  //   }
  //   &:nth-child(2n) {
  //     background-color: green;
  //   }
  // }
`;
// &: 현재 선택자(태그?)
