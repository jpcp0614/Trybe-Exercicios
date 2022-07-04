import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    
    this.state ={
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0
    }
  }

  handleClick1() {
    this.setState((previousState, _props) => ({
      clicksBtn1: previousState.clicksBtn1 + 1
    }), () => {
      console.log(`Botão A: ${this.clicksIsEven(this.state.clicksBtn1)}`);
      })
  }
  
  handleClick2() {
    this.setState((previousState, _props) => ({
      clicksBtn2: previousState.clicksBtn2 + 1
    }), () => {
      console.log(`Botão A: ${this.clicksIsEven(this.state.clicksBtn2)}`);
      })
  }
  
  handleClick3() {
    this.setState(({ clicksBtn3 }) => ({ //* desconstrução
      clicksBtn3: clicksBtn3 + 1
    }), () => {
      console.log(`Botão A: ${this.clicksIsEven(this.state.clicksBtn3)}`);
      })
  }

  clicksIsEven(number) { return number % 2 === 0 ? 'green' : 'white' }

  render() {
    console.log(this)
    const { clicksBtn1, clicksBtn2, clicksBtn3 } = this.state;
    return(
      <div>
        <button onClick={ this.handleClick1 }
          style={{ backgroundColor: this.clicksIsEven(clicksBtn1) }}>
          Botão A: { this.state.clicksBtn1 }
        </button>

        <button onClick={ this.handleClick2 }
          style={{ backgroundColor: this.clicksIsEven(clicksBtn2) }}>
          Botão B: { this.state.clicksBtn2 }
        </button>

        <button onClick={ this.handleClick3 }
          style={{ backgroundColor: this.clicksIsEven(clicksBtn3) }}>
          Botão C: { this.state.clicksBtn3 }
        </button>
      </div>
    );
  }
}

export default App;
