import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import In from "./In";
import Out from "./Out";
function Log() {
  return (
    <div>
      Log!
      <Outlet />
      {/* 하위 라우터의 위치를 결정한다. */}
    </div>
  );
}
export default Log;
// params(파라미터) :: 유즈 파람스 공부해 보자
