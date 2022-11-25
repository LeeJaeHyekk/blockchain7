import { useState, useContext } from "react";
import { officeContext } from "./ReducerTest";

export default function Office() {
  const { result, requestDispatch } = useContext(officeContext);
  const [balance, setBalance] = useState(10000);
  return (
    <div
      className="office"
      onClick={() => {
        requestDispatch({
          type: "주민등록 등본",
          payload: { identityCard: "주민등록증", pay: 500 },
        });
      }}
    >
      {result}
    </div>
  );
}
