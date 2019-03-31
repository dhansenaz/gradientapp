import React, { Component } from "react";
import "./card.css";
import SeeCodeButton from "../components/SeeCodeButton";
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
            <h1>{element.title}</h1>
          </div>
          <div className="circle" style={{ backgroundImage: element.style }} />
          <SeeCodeButton gradient={element} />
        </div>
      );
    });
    return <div className="card-container">{cards}</div>;
  }
}


export default Card;
