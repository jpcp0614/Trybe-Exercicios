import React, { Component } from 'react';
import MyContext from '../context/MyContext';

class Daugther extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filha</h4>
        <MyContext.Consumer>
          { 
            value => (
              <div>
                <p>{ `Eu tenho ${ value.money } pra gastar` }</p>
                <button onClick={ value.sendMoney }>Gastar</button>
              </div>
            )
          }
        </MyContext.Consumer>
        {/* <p>{ `Eu tenho ${ money } pra gastar` }</p>
        <button
          onClick={ sendMoney }
        >
          Gastar
        </button> */}
      </div>
    )
  }
}

export default Daugther;