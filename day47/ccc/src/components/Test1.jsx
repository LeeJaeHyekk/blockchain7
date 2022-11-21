import React from "react";
export default class Test1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }
  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props);
    console.log(this);
  }
  componentDidUpdate() {
    // state가 변경된 후에 실행되는 함수
    console.log("componentDidUpdate");
    console.log(this.props);
    console.log(this);
  }

  componentWillUnmount() {
    // virtual dom에서 삭제될때 실행되는 함수
    console.log("componentWillUnmount");
    console.log(this.props);
  }
  render() {
    return <div></div>;
  }
}
