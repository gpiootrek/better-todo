import React from "react";
import Card from "../Card/Card";
import "./list.scss";

type ListProps = {
  title: string;
};

const List = ({ title }: ListProps) => {
  return (
    <div className="list">
      <h2 className={`list__heading list__heading--${title}`}>{title}</h2>
      <ul className="list__tasks">
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
};

export default List;
