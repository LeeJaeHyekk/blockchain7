import "./App.css";
import PropsTest from "./components/PropsTest";
import ContextTest from "./components/Contesttext";
import Reducerter from "./components/Reducter";
import Office from "./components/Office";
function App() {
  return (
    <div className="App">
      <PropsTest></PropsTest>
      <ContextTest></ContextTest>
      <Reducerter>
        <ContextTest />
        <Office />
      </Reducerter>
    </div>
  );
}

export default App;
