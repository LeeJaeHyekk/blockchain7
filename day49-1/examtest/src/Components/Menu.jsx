import React from "react";
import styled from "styled-components";
export default function Menu({ arr }) {
  console.log(arr);
  const tempArr = [];
  arr.map((item, index) => {
    tempArr.push(
      <div key={index}>
        <div key={index}>{item}</div>
      </div>
    );
  });
  return tempArr;
}

// 1.프롭스로 넘겨주는 배열이 없음 2.forEach는 리턴이 안됨 => map 을 써야됨

// let arrDiv = [
//   <div key={0}>0</div>,
//   <div key={1}>1</div>,
//   <div key={3}>3</div>,
//   <div key={4}>4</div>,
// ];
// function arrFunc(arr) {
//   const tempArr = [];
//   // for (let i = 0; i < arr.length; i++) {
//   //   tempArr.push(<div key={i}>{arr[i]}</div>);
//   // }
//   arr.forEach((item, index) => {
//     tempArr.push(<div key={index}>{item}</div>);
//   });
//   return tempArr;
// }
