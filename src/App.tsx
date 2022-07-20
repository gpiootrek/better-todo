import React from "react";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Board />
    </div>
  );
};

export default App;
