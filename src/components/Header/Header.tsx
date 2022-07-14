import React from "react";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import "./header.scss";

const Header = () => {
  const handleClick = () => {};

  return (
    <header className="header">
      {/* TODO: Put a board name in heading */}
      <h2 className="header__heading">Platform Launch</h2>
      <div>
        <Button
          onClick={handleClick}
          text="+ Add New Task"
          classes="header__button"
        />
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
