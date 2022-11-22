import React from "react";
import styled from "styled-components";
export default function TakList({ limoarr }) {
  const tempArr = [];
  limoarr.map((item, index) => {
    tempArr.push(
      <div key={index}>
        <div key={index}>{item}</div>
      </div>
    );
  });
  return tempArr;
}
