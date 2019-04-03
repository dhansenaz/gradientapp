import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import ColorChoices from "./components/ColorChoices";
import axios from "axios";

class App extends Component {
  state = {
    allGradients: [],
    category:'all'
  };
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
  setCategory(category) {
    this.setState({category})
  }
  render() {
    const {category, allGradients} = this.state;
    const gradients = allGradients
      .filter(grad => category === 'all' || grad.category === category)

    return (
      <div className="App">
        <Header />
        <ColorChoices colorChoices={['all', ...new Set(allGradients.map(grad => grad.category))]} onChoose={cat => this.setCategory(cat)} />
        <div className="card-container">
          <Card gradients={gradients}/>
        </div>
      </div>
    );
  }
}

export default App;
