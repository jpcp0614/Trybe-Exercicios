import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Solution extends Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return (
      <div>
        <h1>Gabarito de:</h1>
        <h2>{ match.params.slug }</h2>
        <Link to="/solutions">
          Voltar
        </Link>
      </div>
    );
  }
}

export default Solution;