import React, { Component } from "react";
import "./card.css";
import SeeCodeButton from "../components/SeeCodeButton";

const Card = ({ gradients }) => {
  let cards = gradients.map(element => {
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
};

export default Card;
