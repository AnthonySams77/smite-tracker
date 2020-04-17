import React, { Component } from "react";
import Player from "../PlayerTable/player";

class PlayerTable extends Component {
  state = {};
  render() {
    const persons = this.props.persons;

    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">In-game Name</th>
            <th scope="col">Time In</th>
            <th scope="col">GP owed</th>
            <th scope="col">% owed</th>
            <th scope="col">Time Out</th>
          </tr>
        </thead>
        {persons.map((person) => (
          <Player person={person}></Player>
        ))}
      </table>
    );
  }
}

export default PlayerTable;
