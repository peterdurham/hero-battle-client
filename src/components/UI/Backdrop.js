import React from "react";
import "../../assets/scss/main.scss";

const Backdrop = props =>
  props.show ? <div className="Backdrop" onClick={props.clicked} /> : null;

export default Backdrop;
