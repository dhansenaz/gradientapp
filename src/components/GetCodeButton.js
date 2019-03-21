import React, { Component } from "react";
import "../components/codebutton.css";

export default class GetCodeButton extends Component {
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
    let display = <p>background-image:{this.props.gradient.style};</p>;
    if (!this.state.show) {
      display = (
        <button onClick={this.showCode} className="code-button">
          SEE CODE
        </button>
      );
    }
    return <div>{display}</div>;
  }
}
