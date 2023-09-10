import React from "react";
import "./Button.scss";

export default function Button({ icon, text, onClick }) {
  return (
    <button className="button">
      <img className="button__icon" src={icon} alt="icon" />
      {text}
    </button>
  );
}
