import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

//StrictMode 가 무엇인가?
// -안전하지 않는 생명주기 매서드를 체크해서 알려준다.
// (componentDidUpdate 등등)를 체크해서 알려준다.
// - ref에 대한 경고를 해준다.
//   -스트링 형식의 ref가 있었다.
// - 메모리 누수등의 부작용 검사를 해준다.
//  메모리가 삭제되지 않는현상(메모리 누수)등의 문제가 발생했을때 알려준다.
//  - 레거시 Conrext API에 대한 검사를 해준다.
//  - 과거의 잔재들이다.
//  지금은 없어도 상관이 없다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
