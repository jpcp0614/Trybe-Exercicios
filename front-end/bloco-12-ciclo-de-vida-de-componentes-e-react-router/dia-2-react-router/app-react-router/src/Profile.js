import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { city } = this.props.match.params;
    return (
      <div>
        <h1>Meu perfil: {this.props.name}. Viva { city }</h1>
      </div>
    );
  }
}

export default Profile;