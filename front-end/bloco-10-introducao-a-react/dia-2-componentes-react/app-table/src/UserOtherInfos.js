import React, { Component } from 'react';

class UserOtherInfos extends Component {
  render() {
    const { email, id } = this.props
    return (
      <span>{ email } { id }</span>
    );
  };
};

export default UserOtherInfos;