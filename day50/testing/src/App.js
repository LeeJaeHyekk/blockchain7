// React의 구조
// Components << 기능적으로 최소 단위
// - 기능을 포함하는 HTML 구조 단위
// components는 항상 html 구조를 return 해야 한다.
//  함수형에서는 함수 자체가 return한다.
// 클래스형에서는 render 해야 한다,
// div 를 여러개 리턴해야 할떄 <></> 로 묶음
// 구조상에서 컴포넌트가 있고(root)
// -app
//   - userbox
//   - regist
//   - login
//   - logout
//

import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  function testing() {
    return "함수 테스팅";
  }
  function increase() {
    num = num + 1;
    console.log(num);
  }
  let test = "테스팅";
  let num = 1;
  let boolean = true;
  let str = "문자열";
  let arrDiv = [
    <div key={0}>0</div>,
    <div key={1}>1</div>,
    <div key={3}>3</div>,
    <div key={4}>4</div>,
  ];
  function arrFunc(arr) {
    const tempArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //   tempArr.push(<div key={i}>{arr[i]}</div>);
    // }
    arr.forEach((item, index) => {
      tempArr.push(<div key={index}>{item}</div>);
    });
    return tempArr;
  }

  let obj = { name: "객체" };
  let nul = null;
  let und = undefined;

  return (
    <div className="App">
      <App1 />;<div onClick={increase}>클릭</div>
      <div>{test}</div>
      <div>{num}</div>
      <div>{boolean}</div>
      <div>{str}</div>
      <div>{arrDiv}</div>
      <div>{obj.toString()}</div>
      <div>{nul}</div>
      <div>{und}</div>
      <div>{boolean ? "true" : "false"}</div>
      {/* {}값을 가져야만 출력할수 있다. 단, object는 방법이 모호하기 때문에 출력을 못한다. */}
      {/* console.log() : '값을 내보낸다, 가져온다'  << 변수 함수  '수'이다 */}
      <div>{testing()}</div>
      <div>{arrFunc(arrDiv)}</div>
      {arrDiv.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
  // HTML 태그 내에서 {}를 사용하여 변수를 출력할 수  있다.
}

export default App;

class App1 extends React.Component {
  // 컴포넌트를 만들때 컴포넌트의 모든 코드를 알고있나? << 모른다 그렇기 떄문에 상속을 받도록 한다.\
  num = 0;
  // 여기서 정의한것은 this 를 써야 적용이 된다.
  constructor(props) {
    // 클래스를 생성할떄 실행되는 코드
    super(props);
    // 상속을 받았을때  부모의 해당 매서드를 실행한다. << 부모의 constructor
    console.log(this);
    console.log(this.num);
    this.state = { name: "상태값", num: 0, classNames: ["app3"] };
  }
  divRef = React.createRef(); // useRef()

  //
  // 순서를 정하는 애들이다.
  componentDidMount() {
    // 탑재한다. 정보를 수정해는 애
    console.log("componentDidMount");
    console.log(this);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.log(this);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log(this);
  }
  increase = () => {
    // this.state.num = this.state.num + 1;
    console.log(this.num);
    console.log(this.state.name);
    this.setState({ num: this.state.num + 1 });
    // 여기서의 this는 increaseFunc 매서드이다.
    // 호출하는 곳에서 bind 메서드로 this를 App1로 전달해야 한다.
  };
  ChangeName = () => {
    // this.setState({ name: this.state.name + "1" });
    if (this.state.classNames.indexOf("app4") === -1) {
      this.setState({ classNames: [...this.state.classNames, "app4"] });
    } else {
      this.setState({ classNames: [...this.state.classNames.slice(0, 1)] });
    }
    console.log(this.divRef);
    console.log(this.divRef.current);
  };
  render() {
    return (
      <>
        <div onClick={this.increase.bind(this)}>{this.state.num}</div>
        <div onClick={this.increase}>{this.state.num}</div>
        <div ref={this.divRef} onClick={this.ChangeName}>
          {this.state.name}
        </div>
        <div
          className={this.state.classNames.join(" ")}
          onClick={this.ChangeName}
        >
          click
        </div>
      </>
    );
  }
}
// const app1 = new App1(props);
