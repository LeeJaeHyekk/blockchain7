import { useState } from "react";

export default function ({ test, children }) {
  //   let count = 0;
  const [count1, setCount1] = useState(0);
  // props다 , 나중에 다시 설명
  // props는 상위 컴포넌트에서 해당 컴포넌트에서 해당 컴포넌트의 자식으로 설정된 값이다.
  const arr = [{ title: "테스트 중입니다.", text: "아몰랑", userName: "ljh" }];
  return (
    <>
      <div style={{ filter: "invert(1)" }}>{test}</div>
      <div
        style={{
          fontSize: "30px",
          backgroundColor: "red",
          filter: "invert(1)",
        }}
      >
        {children}
      </div>

      <button
        style={{ filter: "invert(1)" }}
        onClick={function () {
          console.log(count1);
          setCount1(count1 + 1);
        }}
      >
        {count1}
      </button>
    </>
  );
  //html 문법 내에 javascript 변수 / 함수 등등을 사용할 경우 {}로 묶어 준다
}

// component 란 여러개의 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 작은 기능적 단위
//  react는 view를 위한 라이브러리 >> font end에 보여주기 위한 라이브러리 >> 랜더링이 주된 기능이다. >> 기능은 div 등등의 element 구조로 많이 나뉘어 진다.
