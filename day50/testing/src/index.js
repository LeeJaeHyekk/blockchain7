import React from "react";
import ReactDOM from "react-dom/client";
// React와 외부를 연결하는 라이브러리
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; //성능측정용 파일

const root = ReactDOM.createRoot(document.getElementById("root"));
// 시작점이 어디인지를 알려주는 코드
// document.getElementById => 아이디를 기준으로 엘리먼트를 가져온다.
// React의 Root Dom을 만든다. << virtual dom의 시작점이 필요하다.
// React의 장점은 코드의 재활용이 쉽다.
root.render(
  // React의 Root DOM에 매개변수로 전달된 컴포넌트를 생성한다.(Mount)
  // <React.StrictMode>
  // mount -> unmount -> mount << 때문에 2번 출력된다.
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Redux -> useContext ,useReducter ,
