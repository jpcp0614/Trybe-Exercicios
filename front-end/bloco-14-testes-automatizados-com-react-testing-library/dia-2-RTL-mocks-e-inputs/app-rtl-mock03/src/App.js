import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      nome: '',
      email: '',
    }
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render () {
    const { nome, email } = this.state;

    return (
      <div className="App">
        <h1>Teste de inputs</h1>
        <section>
          <label htmlFor='nome'>
            Nome:
            <input
              id='nome'
              type='text'
              name='nome'
              value={ nome }
              onChange={ (event) => this.handleInput(event) }
            />
          </label>
        </section>
        <section>
          <label htmlFor='email'>
            Email:
            <input
              id='email'
              type='text'
              name='email'
              value={ email }
              onChange={ (event) => this.handleInput(event) }
            />
          </label>
        </section>
      </div>
    );
  }
}

export default App;
