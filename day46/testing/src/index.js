import React from "react";
// es6 문법으로 되어있다.
// 기본적으로 import, export를 사용한다.
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//라우터 구현시 수정. 이외에는 수정할 일 없음
const root = ReactDOM.createRoot(document.getElementById("root"));
// root는  public 의 아이디가 root인 element 를 가져와서 그 안에 react그조를 그리게 한다.
root.render(
  <React.StrictMode>
    {/* HTML 문법을 JAVASCRIPT 로 사용 */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
