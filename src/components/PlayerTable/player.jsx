import React, { Component } from "react";

class Player extends Component {
  state = {};
  render() {
    const person = this.props.person;

    return (
      <tr>
        <td>{person.rsn}</td>
        <td>{person.timeIn}</td>
        <td>{person.gpOwed}</td>
        <td>{person.gpOwed}</td>
        <td>{person.timeOut}</td>
      </tr>
    );
  }
}

export default Player;
