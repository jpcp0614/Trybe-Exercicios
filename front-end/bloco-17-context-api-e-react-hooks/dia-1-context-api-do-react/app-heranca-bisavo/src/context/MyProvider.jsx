import React, { Component } from 'react';
import MyContext from './MyContext';

class GreatGrandmother extends Component {
  constructor() {
    super();
    this.state = {
      money: 10000,
    }
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney(){
    this.setState((prevState) => ({ money: prevState.money - 100 }));
  }

  render() {
    const { money } = this.state;
    const { children } = this.props;
    const contextValue = {
      money: money,
      spendMoney: this.handleSendMoney,
    }
    return (
        <MyContext.Provider value={ contextValue }>
           { children }
        </MyContext.Provider>
    );
  }
}

export default GreatGrandmother;