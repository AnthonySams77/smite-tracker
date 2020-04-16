import React, { Component } from "react";
import Player from "./player";

class PlayerTable extends Component {
  state = {};
  render() {
    return (
      <table>
        <Player />
      </table>
    );
  }
}

export default PlayerTable;
