import React from "react";
import "./custominput.css";

function CustomInput(props) {
  return (
    <div>
      <input
        className="customInp"
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
}

export default CustomInput;
