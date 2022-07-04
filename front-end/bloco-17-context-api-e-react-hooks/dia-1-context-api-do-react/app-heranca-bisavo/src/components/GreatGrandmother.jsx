import React, { Component } from 'react';
import Grandmother from './Grandmother';
import MyContext from './MyContext';
class GreatGrandmother extends Component {
  render() {
    const { money } = this.context;
    
    return (
      <div>
        <h1>Eu sou a bisavó</h1>
          <Grandmother
            money={ money }
            spendMoney={ this.handleSpendMoney }
          />          
      </div>
    );
  }
}

GreatGrandmother.contextType = MyContext;

export default GreatGrandmother;