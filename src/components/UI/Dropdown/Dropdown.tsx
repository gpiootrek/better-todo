import React from "react";
import optionsSrc from "../../../assets/options.svg";
import "./dropdown.scss";

const Dropdown = () => {
  return (
    <button className="dropdown">
      <img
        src={optionsSrc}
        alt="options button icon"
        className="dropdown__img"
      />
    </button>
  );
};

export default Dropdown;
