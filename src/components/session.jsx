import React, { Component } from "react";
import PlayerTable from "./PlayerTable/playertable";
import ItemTable from "./ItemTable/itemtable";
import { getItems } from "../assets/item";
import { getPersons } from "../assets/person";

class Session extends Component {
  state = {
    items: getItems(),
    persons: getPersons(),
  };
  render() {
    return (
      <React.Fragment>
        <ItemTable items={this.state.items}></ItemTable>
        <PlayerTable persons={this.state.persons}></PlayerTable>
      </React.Fragment>
    );
  }
}

export default Session;
