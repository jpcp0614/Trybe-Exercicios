import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      inputEmail: '',
      saveEmail: '',
    }

    
  }

  // Função para inputEmail
  changeEmail = (value) => {
    this.setState({
      inputEmail: value
    });
  }

  //Função para btnEnviar
  changeSaveEmail = (value) => {
    this.setState({
      saveEmail: value,
      inputEmail: '', // limpa o campo de email
    });
  }

  render () {
    const { inputEmail, saveEmail } = this.state;
    return (
      <div className="container">
        <div className="App">
          <label htmlFor="id-email">
            Email:
            <input
              id="id-email"
              type="email"
              value={ inputEmail }
              onChange={ (event) => this.changeEmail(event.target.value) }
            />
          </label>
          <input
            id="btn-enviar"
            type="button"
            value="Enviar"
            data-testid="id-send"
            onClick={ () => this.changeSaveEmail(inputEmail) }
          />
          <input
            id="btn-voltar"
            type="button"
            value="Voltar"
            data-testid="id-comeback"
          />
        </div>
          <h2>{`Valor: ${ saveEmail }`}</h2>
      </div>
    );

  }
}

export default App;
