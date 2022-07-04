import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      joke: '',
    }
  }

  componentDidMount() {
    this.jokeFunction();
  }

  jokeFunction = () => {
    const API_URL = 'https://icanhazdadjoke.com/';
    fetch(API_URL, { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .then(({ joke }) => this.setState({ joke })) // desestruturação
      // .then((data) =>
      //   this.setState({
      //     joke: data.joke,
      //   }))
  }

  render () {
    const { joke } = this.state;
    return (
      <div className="App">
        <h3>{ joke }</h3>
      </div>
    );

  }
}

export default App;
