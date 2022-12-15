import React from "react";
import btnstyles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={btnstyles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
