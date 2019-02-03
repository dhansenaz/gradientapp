import React, { Component } from "react";

import "./card.css";
import GetCodeButton from "../components/GetCodeButton";
import axios from "axios";

class CssCircle extends Component {
  constructor() {
    super();

    this.state = {
      gradientCss: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/gradients")
      .then(response => {
        console.log(response);
        this.setState(() => ({ allGradients: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
      
    let circle = this.state.gradientCss.map(element => {
      return (
          <div className="circle" >
            {element.style}
           </div>
      );
    });
    return <div>{circle}</div>;
  }
}

export default CssCircle;