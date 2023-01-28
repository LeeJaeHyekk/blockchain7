import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i ren all the time");
  const iRunOnlyOnce = () => {
    console.log("i runOnlyOnce");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("search", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      ></input>
      <h1>{+counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
