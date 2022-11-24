import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/Home";
import Login from "./components/Login";
import Log from "./components/Log";
import In from "./components/Log/In";
import Out from "./components/Log/Out";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    // 이 안에서 라우터에 대한 설정을 모두 구현한다.
    path: "", // root
    element: <App />, // component
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "log",
        element: <Log />,
        children: [
          { path: "in", element: <In /> },
          {
            path: "out",
            element: <Out />,
          },
        ],
      },
    ],
  },
]);
// router 설정에있어 root를 설정한다.
// 해당 컴포넌트가 없을시 라우터를 구현하지 못한다.
// React 시작할때 무조건 넣는다고 생각하자

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <BrowserRouter>
  <RouterProvider router={router} />

  // </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
