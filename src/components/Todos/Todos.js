import React from "react";

import Todo from "../Todo/Todo";

import "./todos.scss";

function Todos(props) {
  return (
    <section className="todos">
      {props.todos &&
        props.todos.map((todo) => {
          return (
            <Todo
              key={todo._id}
              todo={todo}
              editTodo={props.editTodo}
              deleteTodo={props.deleteTodo}
            />
          );
        })}
    </section>
  );
}

export default Todos;
