import React, { Component } from "react";
import Type from "./Type";
import Radium, { StyleRoot } from "radium";

class Parent extends Component {
  state = {
    types: ["A", "B", "AB", "O"]
  };
  render() {
    return (
      <div>
        {this.state.types.map(type => {
          return (
            <Type
              name={type}
              gender={this.props.gender}
              click={this.props.click}
              key={type}
            />
          );
        })}
      </div>
    );
  }
}

export default Radium(Parent);
