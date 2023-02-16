import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import BlockCheckMain from "./containers/BlockCheckMain";

function App() {
  return (
    <div className="App">
      <div>
        <Link to={"/"}>HOME</Link>
      </div>
      <Routes>
        <Route path="/checkBlock" element={<BlockCheckMain />} />
      </Routes>
    </div>
  );
}

export default App;
