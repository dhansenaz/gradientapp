import React, { Component } from "react";

export default class CopyCode extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showCode = this.showCode.bind(this);
  }

  showCode() {
    this.setState({ show: true });
  }
  render() {
    let display = <div>background-image:{this.props.gradient.style};</div>;
    if (!this.state.show) {
      display = (
        <button onClick={this.showCode} className="code-button">
          SEE CODE
        </button>
      );
    }
    return <div className="css-code">{display}</div>;
  }
}
