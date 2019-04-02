import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import ColorChoices from './components/ColorChoices'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ColorChoices />
        <div className="card-container">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
