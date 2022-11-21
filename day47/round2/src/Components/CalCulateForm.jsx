import React from "react";
export default class CalCulateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.setState({ count: this.state.count + 1 });
          }.bind(this)}
        >
          {this.state.count}
        </div>
        <div
          onClick={function (e) {
            e.stopPropagation();
            this.props.setCount(this.props.count + 1);
          }.bind(this)}
        >
          {this.props.count}
        </div>
      </>
    );
  }
}
