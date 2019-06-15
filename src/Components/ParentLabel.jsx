import React, { Component } from "react";
import "../App.css";
import Radium from "radium";

const ParentLabel = props => {
  const determineClasses = () => {
    if (props.gender === "father") return "blue";
    else return "red";
  };

  const showDefault = () => {
    if (props.type === null) return "Please Choose";
    else return props.type;
  };
  const style = {
    cursor: "pointer",
    ":hover": {
      color: "black",
      backgroundColor: "lightblue"
    }
  };
  if (props.gender === "mother") {
    style[":hover"] = {
      color: "black",
      backgroundColor: "rgba(255, 186, 186)"
    };
  }
  return (
    <span
      style={style}
      className={
        "badge badge-pill m-2 pt-2 pb-2 pl-4 pr-4 " + determineClasses()
      }
      onClick={props.delete}
    >
      <div>{showDefault()}</div>
    </span>
  );
};

export default Radium(ParentLabel);
