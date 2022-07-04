import React, { Component } from 'react'
import Daugther from './Daugther';

class Father extends Component {
  render() {
    const { money } = this.context;
    return (
      <div>
        <h3>Eu sou o pai</h3>
        <Daugther
          // money={ money }
          // spendMoney={ spendMoney }
        />
      </div>
    )
  }
}

Father.contextType = MyContext;

export default Father;