import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import In from "./components/Log/In";
import Out from "./components/Log/Out";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Log from "./components/Log";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="" element={<Home propsNum={num} />} />
        {/* 라우터를 나누기 위해서는 Routes 컴포넌트로 묶어야한다. /}
        {/ Route는 각 라우터에 대한 구현이다. path는 라우터의 주소, element는 출력할 엘리먼트(컴포넌트 */}
        <Route path="login" element={<Login />} />
        <Route path="log" element={<Log />}>
          <Route path="in" element={<In />} />
          <Route path="out" element={<Out />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
