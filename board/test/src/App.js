import AddBoardContainer from "./container/AddBoard";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { BoardContainer } from "./container/Board";
import RegistContainer from "./container/Regist";

function App() {
  return (
    <div className="App">
      <div>
        <Link to={"/"}>Home</Link>|<Link to={"/new"}>new Board</Link>|{" "}
      </div>
      <Routes>
        <Route path="/new" element={<AddBoardContainer />}></Route>
        <Route path="/" element={<BoardContainer />}></Route>
        <Route path="/user/sign" element={<RegistContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
