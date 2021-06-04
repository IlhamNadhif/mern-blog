import React from "react";
import "./textarea.scss";

const TextArea = ({ value, ...rest }) => {
  return (
    <div>
      <textarea className="text-area" defaultValue={value} {...rest}>
      </textarea>
    </div>
  );
};

export default TextArea;
