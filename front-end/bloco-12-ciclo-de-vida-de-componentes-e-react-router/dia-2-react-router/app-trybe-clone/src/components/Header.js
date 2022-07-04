import React, { Component } from 'react';
import TrybeLogo from '../img/logo.svg'
import ToggleButtonImage from '../img/list.svg';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <button className="toggle-button" type="button">
          <img src={ ToggleButtonImage } alt="Toggle sidebar button" />
        </button>
        <img src={ TrybeLogo } alt="Trybe Logo" />
        <h4>Curso</h4>
      </header>
    );
  }
}

export default Header;
