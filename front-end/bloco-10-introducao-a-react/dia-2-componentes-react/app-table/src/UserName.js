import React, { Component } from 'react';
import './UserName.css';

class UserName extends Component {
  render() {
    const name = this.props.name; //* acessando via USerName, o nome, através do props
    return (
      <span className="name">{ name }</span>
    );
  };
};

export default UserName;