import React, { Component } from "react";

import "./css/colorchoices.css";

export default class ColorChoices extends Component {
  chooseColor(color) {
    this.props.onChoose(color);
  }

  render() {
    return (
      <div className="choices-container">
        {this.props.colorChoices.map(color => (
          <button
            style={{ backgroundColor: `${color}` }}
            className={`code-button-color ${color} `}
            onClick={() => this.chooseColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    );
  }
}
