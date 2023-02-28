import React from "react";
import "./button.css";

function CustomButton(props) {
  return (
    <div>
      <button className="button">{props.name}</button>
    </div>
  );
}

export default CustomButton;
