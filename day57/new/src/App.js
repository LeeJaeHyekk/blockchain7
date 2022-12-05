import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const userId = useSelector((state) => state.userInfo.userId);
  return <div className="App"></div>;
}

export default App;
