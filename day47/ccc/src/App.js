// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// import ClassComp from "./components/ClassComp";

// function App() {
//   const [isMount, setMount] = useState(true);
//   function changeMount() {
//     setMount(!isMount);
//   }
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App" onClick={changeMount}>
//       {isMount ? <ClassComp count={count} setCount={setCount} /> : <></>}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import "./App.css";
import BtnComp from "./components/BtnComp";
import Test1 from "./components/Test1";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: undefined,
      secondNum: undefined,
      result: undefined,
    };
  }
  componentDidUpdate() {
    console.log(this.state);
  }

  selNum(num) {
    if (this.state.firstNum == undefined) {
      this.setState({ ...this.state, firstNum: num });
    } else if (this.state.secondNum == undefined) {
      this.setState({ ...this.state, secondNum: num });
    }
  }
  render() {
    // (클래스) 컴포넌트의 필수이다.(Virtual DOM에 그려지는 HTML 구조)
    // 클래스 컴포넌트에서만 render 매서드 사용 / 함수형 컴포넌트에서는 return으로 바로사용
    return (
      <div className="calcuator">
        <Test1 />
        <div className="row">
          <BtnComp item={1} onClick={this.selNum.bind(this)} />
          <BtnComp
            item={1}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 1 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 1 });
              }
            }.bind(this)}
          />

          <BtnComp
            className="num-pad"
            item={2}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 2 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 2 });
              }
            }.bind(this)}
          />
          <BtnComp
            className="num-pad"
            item={3}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 3 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 3 });
              }
            }.bind(this)}
          />
        </div>

        <div className="row">
          <BtnComp
            className="num-pad"
            item={4}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 4 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 4 });
              }
            }.bind(this)}
          />
          <BtnComp
            className="num-pad"
            item={5}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 5 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 5 });
              }
            }.bind(this)}
          />
          <BtnComp
            className="num-pad"
            item={6}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 6 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 6 });
              }
            }.bind(this)}
          />
          <BtnComp className="num-pad" item="-" />
        </div>
        <div className="row">
          <BtnComp
            className="num-pad"
            item={7}
            // onClick={function (e) {
            //   if (this.state.firstNum == undefined) {
            //     this.setState({ ...this.state, firstNum: 7 });
            //   } else if (this.state.secondNum == undefined) {
            //     this.setState({ ...this.state, secondNum: 7 });
            //   }
            // }.bind(this)}
            onClick={this.selNum.bind(this)}
          />
          <BtnComp
            className="num-pad"
            item={8}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 8 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 8 });
              }
            }.bind(this)}
          />
          <BtnComp
            className="num-pad"
            item={9}
            onClick={function (e) {
              if (this.state.firstNum == undefined) {
                this.setState({ ...this.state, firstNum: 9 });
              } else if (this.state.secondNum == undefined) {
                this.setState({ ...this.state, secondNum: 9 });
              }
            }.bind(this)}
          />
          <BtnComp className="num-pad" item="x" />
        </div>

        <div className="row">
          <BtnComp className="num-pad" item="" />
          <BtnComp className="num-pad" item="" />
          <BtnComp className="num-pad" item="" />
          <BtnComp className="num-pad" item="%" />
        </div>
      </div>
    );
  }
}
export default App;
