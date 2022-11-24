import React from "react";
import "./App.css";
3;
import { useState } from "react";

function App() {
  const [color, setColor] = useState(0);
  let num = 0;

  const increase = () => {
    num += 1;
    console.log(num);
  };

  return (
    <div className="App" onClick={increase}>
      <ChildComp text="string" num={num} color={color} />
      <ChildFnc text="string" num={num} color={color} setColor={setColor} />
    </div>
  );
}

class ChildComp extends React.Component {
  constructor(props) {
    super(props);
    // props란 부모가 컴포넌트가 전달한 데이터
    // 보통은 읽기 전용으로 쓴다. 재정의를 하지 않는다.
    // constructor(생성자)에서 매개변수로 받아 상속 클래스(React.Component)dml constructor를 호출
    // 이후 this.props를 사용하여 호출할(가져올) 수 있다.
  }
  render() {
    return (
      <div style={{ color: "#" + this.props.color.toString(16) }}>
        {/* toString() 해당 진수로 바꿔준다.
        css에서 색상을 구현할때 rgb : */}
        {this.props.num}
      </div>
    );
  }
}
function ChildFnc(props) {
  const changColor = () => {
    props.setColor((state) => state + 100);
    // 함수형으로 쓰면 이전 값을 가져올수 있다.
  };
  // setState(변경할 값)
  // setSate((state)=>{<< 여기서 state는 기존의 값 return 변경할 값})
  // setState((state)=>newState)

  // props의 setColor 매서드를 호출한다.

  // 함수형 컴포넌트에서는 배개변수로 바로 받는다.
  // {}를 사용하여 구조분해 할당을 할 수 있다.
  // function childfunc({})
  // const{}=props << 와 같다.
  return <div onClick={changColor}>{props.num}</div>;
}
export default App;
