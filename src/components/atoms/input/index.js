import React from "react";
import "./input.scss";

const Input = ({ label, value, ...rest }) => {
  return (
    <div className="input-wrapper">
      <p className="label">{label}</p>
      <input className="input" defaultValue={value} {...rest} />
    </div>
  );
};

export default Input;
