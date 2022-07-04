import React, { Component } from 'react'
import Father from './Father';

class Grandmother extends Component {
  render() {
    // const { money, spendMoney } = this.props;
    return (
      <div>
        <h2>Eu só a avó</h2>
        <Father
          // money={ money }
          // spendMoney={ spendMoney }
        />
      </div>
    )
  }
}

export default Grandmother;