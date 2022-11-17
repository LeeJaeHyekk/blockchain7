import React from "react";
export default class classComp extends React.Component {
  // 클래스형 컴포넌트
  constructor(props) {
    super(props);
    // attribute << html 태그에 적는 것
    // ClassComp는 컴포넌트이다. 떄문에 props
    // 예제와 같이  style을 전달했다면 div style={this.props.style}></div> 와 같이 써야한다
    this.state = { count: 0 };
    // count [count , setCount] = useState(0);
    // this.state = {count:0, name:"경훈"}
    // const [count, setCount] = useState(0);
    // const [name, setName] = useState("경훈");
  }
  render() {
    return (
      <div
        onClick={function () {
          this.setState({ count: this.state.count + 1 });
        }}
      ></div>
    );
  }
}
// export default function ClassComp({}){
// 함수형
// return <div></div>
// }
