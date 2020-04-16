import React, { Component } from "react";
import Player from "../PlayerTable/player";

class PlayerTable extends Component {
  state = {};
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">In-game Name</th>
            <th scope="col">Time In</th>
            <th scope="col">GP owed</th>
            <th scope="col">% owed</th>
            <th scope="col">Time Out</th>
          </tr>
        </thead>
        <Player />
      </table>
    );
  }
}

export default PlayerTable;
