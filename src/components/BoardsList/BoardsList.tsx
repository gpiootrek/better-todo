import React from "react";
import "./boardsList.scss";

const BoardsList = () => {
  return (
    <ul className="boards__list">
      <li className="boards__element">
        <button className="boards__button boards__button--active">Platform Launch</button>
      </li>
      <li className="boards__element">
        <button className="boards__button">Marketing Plan</button>
      </li>
      <li className="boards__element">
        <button className="boards__button">Roadmap</button>
      </li>
      <li className="boards__element">
        <button className="boards__button">+ Create New Board</button>
      </li>
    </ul>
  );
};

export default BoardsList;
