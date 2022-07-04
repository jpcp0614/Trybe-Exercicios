import React, { Component } from 'react';

class Users extends Component {
  render() {
    const {
      greetingsMessage = 'Hi',
      match: { params: { id } }
    } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component. My id={ id }</p>
      </div>
    );
  }
};

export default Users;

// const { greetingsMessage } = this.props;
// const { id } = this,props.match.params;