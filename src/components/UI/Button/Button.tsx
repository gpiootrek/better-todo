import React from "react";
import "./button.scss";

type ButtonProps = {
  onClick: () => void;
  text: string;
  classes: string;
};

const Button = ({ onClick, classes, text }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`button ${classes}`}>
      {text}
    </button>
  );
};

export default Button;
