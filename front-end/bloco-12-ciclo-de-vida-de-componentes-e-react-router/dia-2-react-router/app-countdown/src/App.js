import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.initialState = 5;
    this.state = {
      countdown: 5,
    }
    this.convertTime = this.convertTime.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.decrementCountdown = this.decrementCountdown.bind(this);
    this.restartCountdown = this.restartCountdown.bind(this);
  }

  componentDidMount() {
    this.decrementCountdown();
  }

  // Função que converte o state countdown de min para seg
  convertTime() {
    const { countdown } = this.state;
    const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
    // arredondar com o Math.floor e transformar numa string
    const seconds = String(countdown % 60).padStart(2, '0');
    // usar o padStart para preencher a string com caractere
    return (`${minutes}:${seconds}`);
  }

  // Função que decrementa (1 em 1s) o state countdown
  decrementCountdown() {
    const ONE_SECOND = 1000;
    this.timer = setInterval(() => {
      // TODO: const { countdown } = this.state; // tirando essa linha, o timer zera ???
      this.setState({
        countdown: this.state.countdown - 1,
      });
      if ( this.state.countdown === 0) {
        clearInterval(this.timer);
      }
    }, ONE_SECOND)
  }

  // Função do botão Stop que vai parar o setInterval
  stopCountdown() {
    clearInterval(this.timer);
  }

  // Função para fazer o restartCountdown
  restartCountdown() {
    clearInterval(this.timer);
    this.setState({
      countdown: this.initialState,
    });
    this.decrementCountdown(); // volta a decrementar
  }


  /* 
  se usarmos () => this.stopCountdown, executamos a função dentro de outra função
  se for só para referenciar, this.stopCountdown
  */

  render() {
    return (
      <div>
        <h1>{ this.convertTime() }</h1>
        <button
          type="button"
          onClick={ this.stopCountdown }
        >
          Stop
        </button>
        <button
          type="button"
          onClick={ this.decrementCountdown }
        >
          Run
        </button>
        <button
          type="button"
          onClick={ this.restartCountdown }
        >
          Restart
        </button>
      </div>
    );
  }
}

export default App;
