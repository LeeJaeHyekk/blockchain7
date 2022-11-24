import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Log from "./components/Log";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [test, setTest] = useState("gooooood");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path=""
          element={<Home props1={test} props2={setTest} />}
        ></Route>
        <Route path="" element={<LogIn />}></Route>
        {/* <Route>
          <Log />
        </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
