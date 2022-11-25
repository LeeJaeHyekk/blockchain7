import { useState } from "react";
import { useContext } from "react";
import { OfficeContext } from "./Reducter";

export default function Office() {
  const { result, requestDispatch } = useContext(OfficeContext);
  const [balance, setBalance] = useState(10000);
  // 발급 받을때마다 돈이 줄어들도록
  // 발급 금액도 달라야 한다.
  return (
    <div
      className="office"
      onClick={() => {
        requestDispatch({
          type: "주민등록등본",
          // 어떤 작업을 할꺼냐?
          payload: {
            identityCard: "주민등록증",
            //   작업에 필요한 데이터
            pay: 500,
          },
        });
      }}
    >
      {result}
    </div>
  );
}
