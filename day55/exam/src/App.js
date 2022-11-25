import "./App.css";
import ContextTest from "./components/ContextTest";
import Reducerter from "./components/Reducter";
import Office from "./components/Office";
function App() {
  return (
    <div className="App">
      <Reducerter>
        <ContextTest />
        <Office />
      </Reducerter>
    </div>
  );
}

export default App;
