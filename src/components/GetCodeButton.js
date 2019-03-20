import React, { Component } from "react";
import "../components/codebutton.css";
import axios from "axios";

export default class GetCodeButton extends Component {
  constructor() {
    super();

    this.state = {
      style: []
    };
  }
  componentDidMount() {
    axios
      .get("/api/gradients")
      .then(response => {
        console.log(response);
        this.setState(() => ({ style: response.data.style }));
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.getCode} className="code-button">
          GET CODE
        </button>
      </div>
    );
  }
}
