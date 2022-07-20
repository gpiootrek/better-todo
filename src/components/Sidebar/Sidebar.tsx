import React from "react";
import BoardsList from "../BoardsList/BoardsList";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="sidebar__heading">Better ToDo</h1>
      <div className="sidebar__boards">
        <p className="boards__title">All boards (7)</p>
        <BoardsList />
      </div>
    </aside>
  );
};

export default Sidebar;
