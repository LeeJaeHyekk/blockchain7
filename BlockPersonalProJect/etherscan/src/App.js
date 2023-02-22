import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import BlockCheckMain from "./containers/BlockCheckMain";
import MainContainer from "./containers/MainPage";

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
