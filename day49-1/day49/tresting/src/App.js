import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./commponents/ClassComp";
import FuncComp from "./commponents/FuncComp";
import Additional from "./commponents/Additional";

function App() {
  return (
    <div className="App">
      <ClassComp
        text={"texting ClassComp"}
        func={() => {
          console.log("texting ClassComp");
        }}
      />
      <FuncComp
        text={"texting FuncComp"}
        func={() => {
          console.log("texting FuncComp");
        }}
      />
      <Additional />
    </div>
  );
}

export default App;
