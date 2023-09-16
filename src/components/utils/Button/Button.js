import React from "react";
import "./Button.scss";

export default function Button({ icon, text, handleClick }) {
  return (
    <button type="button" className="button" onClick={handleClick}>
      <img className="button__icon" src={icon} alt="icon" />
      {text}
    </button>
  );
}
