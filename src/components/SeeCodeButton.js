import React, { Component } from "react";
import "../components/codebutton.css";

export default class SeeCodeButton extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      code:''
    };
    this.showCode = this.showCode.bind(this);
    this.copyCode = this.copyCode.bind(this);
    
  }
  showCode() {
    this.setState({ show: true, code:'background-image:' + this.props.gradient.style +';' });
  }
  copyCode() {
    const el = document.createElement('textarea');
    el.value = this.state.code;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  render() {
    let display = <div className='fadein'>
     {this.state.code};
     <button onClick={this.copyCode} className="code-button">
          COPY CODE
        </button>
      </div>;
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

