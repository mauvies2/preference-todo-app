import React from "react";

import Todo from "../Todo/Todo";

import "./todos.scss";

function Todos({ todos }) {
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </section>
  );
}

export default Todos;
