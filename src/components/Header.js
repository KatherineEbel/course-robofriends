import React, { Component } from 'react';

class Header extends Component {
  shouldComponentUpdate(nextProps, nexState) {
    return false;
  }
  
  render() {
    return (
        <h1 className="f1">RoboFriends</h1>
    );
  }
}

export default Header;