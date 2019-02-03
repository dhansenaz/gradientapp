import React, { Component } from "react";

import "./card.css";
import GetCodeButton from "../components/GetCodeButton";
import axios from "axios";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      allGradients: []
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
    let cards = this.state.allGradients.map(element => {
      return (
        <div className="card">
          <div key={element.id}>
          <h1>
            {element.title}
          </h1>
          <div className="circle" >
            
           </div>
          </div>
          <GetCodeButton />
        </div>
      );
    });
    return <div>{cards}</div>;
  }
}

export default Card;
// <div className="card-container">
//   <div className="card">
//     <h1>Midnight</h1>
//     <div className="circle"> </div>
//     <GetCodeButton />
//   </div>
//   <div className="card">
//     <h1>Skyline</h1>
//     <div className="circle2"> </div>
//     <h3>Get Code</h3>
//   </div>
//   <div className="card">
//     <h1>Planets</h1>
//     <div className="circle3"> </div>
//     <h3>Get Code</h3>
//   </div>
//   <div className="card">
//     <h1>purple haze</h1>
//     <div className="circle4"> </div>
//     <h3>Get Code</h3>
//   </div>
//   <div className="card">
//     <h1>carbon fiber</h1>
//     <div className="circle5"> </div>
//     <h3>Get Code</h3>
//   </div>
//   <div className="card">
//     <h1>sunrise</h1>
//     <div className="circle6"> </div>
//     <h3>Get Code</h3>
//   </div>
// </div>
