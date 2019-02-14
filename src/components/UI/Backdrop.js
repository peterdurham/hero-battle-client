import React from "react";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";

const Backdrop = props =>
  props.show ? <div className="Backdrop" onClick={props.clicked} /> : null;

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired
};
export default Backdrop;
