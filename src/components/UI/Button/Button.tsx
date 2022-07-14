import React from "react";
import "./button.scss";

type ButtonProps = {
  onClick: () => void;
  text: string;
  classes: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={`button ${props.classes}`}>
      {props.text}
    </button>
  );
};

export default Button;
