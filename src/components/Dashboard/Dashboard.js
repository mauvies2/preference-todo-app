import React, { useState, useEffect } from "react";
import Axios from "axios";

import Todos from "../Todos/Todos";

import "./dashboard.scss";

function Dashboard() {
  const [todos, setTodos] = useState({});
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      await Axios.get(`http://localhost:5000/todos/`, requestOptions)
        .then((res) => {
          console.log(res);
          setTodos({ todos: res.data });
        })
        .catch((err) => console.log(err));
    };
    fetchData();
    console.log(update, "fetched");
  }, [update]);

  const postTodo = (todo) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todo.title,
        description: todo.description,
        severity: todo.severity,
        status: todo.status,
      }),
    };
    fetch(`https://localhost:5000/`, requestOptions)
      .then((res) => {
        res.json();
        // Change update state to trigger the useEffect hook and fetch data again
        setUpdate(update + 1);
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = async (id) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    };
    await fetch(`https://localhost:5000/todos/delete`, requestOptions).then(
      () => {
        // Change update state to trigger the useEffect hook and fetch data again
        console.log("detele was performed");
        setUpdate(update + 1);
      }
    );
  };

  const editTodo = (id, editedTodo) => {
    setTodos(todos.todos.map((todo) => (todo.id === id ? editedTodo : todo)));
  };

  return (
    <section className="dashboard">
      <h1>To Do List</h1>
      <div className="card">
        <div className="todos-header">
          <div className="title-category title">Title</div>
          <div className="title-category description">Description</div>
          <div className="title-category">Severity</div>
          <div className="title-category">Status</div>
          <div className="title-category action"></div>
        </div>
        <Todos
          todos={todos.todos}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </section>
  );
}

export default Dashboard;
