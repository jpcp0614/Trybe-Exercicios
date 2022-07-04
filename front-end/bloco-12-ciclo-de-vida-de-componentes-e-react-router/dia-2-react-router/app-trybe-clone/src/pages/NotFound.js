import React, { Component } from 'react';
import NotFoundImage from '../img/not_found.gif';

class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={ NotFoundImage } alt="Página não encontrada"/>
      </div>
    );
  }
}

export default NotFound;