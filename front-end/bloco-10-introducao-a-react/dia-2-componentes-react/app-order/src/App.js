import React, { Component } from 'react';
import Order from './Oder';

class App extends Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };
    return (
      <div className="App">
        <h1>Orders recently Created</h1>
        <Order order={ headphone }/>
        <Order order={ energyDrink }/>
      </div>
    );
  };
};

export default App;
