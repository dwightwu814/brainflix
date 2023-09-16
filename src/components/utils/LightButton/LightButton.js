import React from "react";
import "./LightButton.scss";

export default function LightButton({ text, onClick }) {
  return <button className="light-button">{text}</button>;
}
