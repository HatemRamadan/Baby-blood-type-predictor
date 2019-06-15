import React, { Component } from "react";
import "../App.css";
import Radium from "radium";

class Type extends Component {
  determineClasse = () => {
    if (this.props.gender === "father") return "blue";
    else return "red";
  };

  render() {
    const style = {
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightblue",
        color: "black"
      }
    };
    if (this.props.gender === "mother") {
      style[":hover"] = {
        backgroundColor: "rgba(255, 186, 186)",
        color: "black"
      };
    }
    return (
      <span
        style={style}
        className={
          "badge badge-pill m-2 pt-2 pb-2 pl-4 pr-4 " + this.determineClasse()
        }
        onClick={() => this.props.click(this.props.name)}
      >
        <div>{this.props.name}</div>
      </span>
    );
  }
}

export default Radium(Type);
