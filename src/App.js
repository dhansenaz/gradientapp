
import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Card />
        </div>
    );
  }
}

export default App;


