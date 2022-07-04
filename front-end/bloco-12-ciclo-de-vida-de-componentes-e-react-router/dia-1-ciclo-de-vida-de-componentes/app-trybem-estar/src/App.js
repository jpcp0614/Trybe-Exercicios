import React, { Component } from 'react';
import './App.css';
import logo from './assets/trybemestar.png'
import Timer from './components/Timer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showTimer: true, // esconder ou mostrar o timer
    }
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  // timerElement() { 
  //   const { showTimer } = this.state;
  //   if (showTimer) { return <Timer /> }
  //   return null; // forma verbosa de condicao
  // }

  toggleTimer() { // funcao de clicar no botao
    this.setState((previousState) => ({
      showTimer: !previousState.showTimer,
    })) // estado tem que mudar -> callback (para inverter o estado atual, parentesis em volta do objeto)
  }

  render() {
    const { showTimer } = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
      </header>
      {showTimer && <Timer />} {/* logical and operator */}
      <button onClick={ this.toggleTimer }
        type="button">
          {showTimer ? 'Esconder Timer' : 'Mostrar Timer'} {/* alterar texto do botao */}
      </button>
    </div>
    );
  }
}
export default App;
