import React from "react";
import List from "../UI/List/List";
import "./board.scss";

const Board = () => {
  return <div className="board">
    <List title="todo"/>
    <List title="doing"/>
    <List title="done"/>
  </div>;
};

export default Board;
