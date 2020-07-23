import React, { useState } from "react";

import Todos from "../Todos/Todos";

import "./dashboard.scss";

function Dashboard() {
  const [todos, setTodos] = useState({
    todos: [
      {
        id: 1,
        title: "cooking",
        description: "cook ribs for lunch",
        severity: 1,
        status: 1,
      },
      {
        id: 2,
        title: "Shower",
        description: "taking a shower to go out",
        severity: 2,
        status: 0,
      },
      {
        id: 3,
        title: "Go to the market",
        description: "Need to go to the market to get some groceries",
        severity: 2,
        status: 0,
      },
    ],
  });

  return (
    <section className="dashboard">
      <h1>To Do List</h1>
      <div className="card">
        <div className="todos-header">
          <div className="title-category">Title</div>
          <div className="title-category description">Description</div>
          <div className="title-category">Severity</div>
          <div className="title-category">Status</div>
        </div>
        <Todos todos={todos.todos} />
      </div>
    </section>
  );
}

export default Dashboard;
