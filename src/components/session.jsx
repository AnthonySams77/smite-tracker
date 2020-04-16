import React, { Component } from "react";
import PlayerTable from "./components/PlayerTable";
import ItemTable from "./compoenenst/ItemTable";
import { getItems } from "../assets/item";

class Session extends Component {
  state = {
    items: getItems(),
    persons: getPersons(),
  };
  render() {
    return (
      <React.Fragment>
        <ItemsTable items={this.state.items}></ItemsTable>
        <PlayerTable persons={this.state.persons}></PlayerTable>
      </React.Fragment>
    );
  }
}

export default Session;
