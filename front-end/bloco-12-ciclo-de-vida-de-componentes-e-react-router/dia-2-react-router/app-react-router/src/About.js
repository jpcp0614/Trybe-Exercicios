import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class About extends Component {
  render() {
    return (
      <div>
        <span>Se meu navio React é o de Teseu e eu refatorei todos os componentes...vou mudar tudo!</span>
        <Link to="/">Voltar para Home</Link>
      </div>
    );
  }
}

export default About;