import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import BlockCheckMain from "./containers/BlockCheckMain";
import MainContainer from "./containers/MainPage";

function App() {
  return (
    <div className="App">
      <div>
        <MainContainer />
      </div>
      <Routes>
        <Route path="/checkBlock" element={<BlockCheckMain />} />
      </Routes>
    </div>
  );
}

export default App;
