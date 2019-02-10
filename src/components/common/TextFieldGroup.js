import React from "react";
import PropTypes from "prop-types";
import "../../assets/scss/main.scss";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
  category
}) => {
  let iconClass;
  if (category === "email") {
    iconClass = "fa fa-envelope TextFieldGroup__email";
  } else if (category === "password") {
    iconClass = "fa fa-lock TextFieldGroup__password";
  }

  return (
    <div className="TextFieldGroup">
      <i className={iconClass} />
      <input
        type={type}
        className={(error ? "is-invalid " : "") + " TextFieldGroup__input"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="TextFieldGroup__info">{info}</small>}
      {error && <div className="TextFieldGroup__error">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
