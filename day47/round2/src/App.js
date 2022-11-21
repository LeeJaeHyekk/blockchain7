import React from "react";
import "./App.css";
import BtnComp1 from "./Components/BtnComp1";
import CalCulateForm from "./Components/CalCulateForm";

function App() {
  return (
    <div>
      <div className="row">
        <BtnComp1 />
        <BtnComp1 item="산" />
        <BtnComp1 item="기" />
        <BtnComp1 item="/" />
      </div>
      <div className="row">
        <BtnComp1 item={1} />
        <BtnComp1 item={2} />
        <BtnComp1 item={3} />
        <BtnComp1 item="x" />
      </div>
      <div className="row">
        <BtnComp1 item={7} />
        <BtnComp1 item={8} />
        <BtnComp1 item={9} />
        <BtnComp1 item="-" />
      </div>
      <div className="row">
        <BtnComp1 item={4} />
        <BtnComp1 item={5} />
        <BtnComp1 item={6} />
        <BtnComp1 item="+" />
      </div>
      <div className="row">
        <BtnComp1 props={1} />
        <BtnComp1 props={2} />
        <BtnComp1 props={3} />
        <BtnComp1 item="=" />
      </div>
    </div>
  );
}

export default App;
