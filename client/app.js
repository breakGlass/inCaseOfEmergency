import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app">
          {/* TODO: plug in home/main component */}
        {/* <Menu /> */}
        {children}
      </div>
    );
  }
}