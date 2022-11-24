import { useState } from "react";
import { useLocation } from "react-router-dom";

function Home({ props1, props2 }) {
  //   const [num, setNum] = useState(0);
  //   const plusNum = () => {
  //     setNum(num + 1);
  //     console.log(num);
  //   };

  //   const [count, setcount] = useState(1);

  //   const plusCount = () => {
  //     setcount(count + 2);
  //   };
  function change() {
    // props2("veeeeery");
    props2(0); //  바꾼다면
  }
  let change2 = () => {
    props2(props1 + 1);
  };
  let change3 = () => {
    props2("gooooood");
  };
  return (
    <>
      <div>1</div>
      {/* <div onClick={plusNum}>{num}</div> */}
      <div>{props1}</div>

      <button onClick={change}>변해라</button>
      <button onClick={change2}>자두과자</button>
      <button onClick={change3}>자두과자1</button>
    </>
  );
}
export default Home;

// 카운트라는 변수를 1로 초기화 하고, 카운트가 담긴 디브를 클릭 했을때 2씩 증가
// 5.ver
