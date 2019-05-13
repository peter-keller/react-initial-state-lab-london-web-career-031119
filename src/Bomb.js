import React, { Component } from "react";

class Bomb extends Component {
  state = {
    secondsLeft: this.props.initialCount
  };
  render() {
    return this.state.secondsLeft ? (
      <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    ) : (
      <p>Boom!</p>
    );
  }
}

export default Bomb;
