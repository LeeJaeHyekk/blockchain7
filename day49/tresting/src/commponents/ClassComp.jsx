import React from "react";
export default class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.props.func();
    this.state = { test: "state test" };
  }
  componentDidMount() {
    console.log("componentDidmount");
    // 컴포넌트가 Visual DOM에 추가될떄(생성될 때/ 마운트 될때)실행되는 메서드
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    // state 값이  변화했을때 실행되는 메서드
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    // 컴포넌트가 DOM에서 삭제될떄 실행되는 메서드
  }
  render() {
    return (
      <div
        onClick={function () {
          this.setState({ test: this.state.test + "1" });
          // state 선언 및 정의(초기화)
          // state :상태값, react 에서의 리랜더링(다시 그리기)의 기준이 된다
          // state가 변경(재정의)되면 render 매서드를 다시 실행하여 뤱페이지에 출력한다.
        }.bind(this)}
      >
        Class{this.props.text}
        {this.state.test}
      </div>
    );
  }
}
