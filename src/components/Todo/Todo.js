import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

import "./todo.scss";

function Todo(props) {
  const { todo } = props;

  const [edit, setEdit] = useState(false);
  const [actualSeverity, setActualSeverity] = useState(todo.severity);
  const [actualStatus, setActualStatus] = useState(todo.status);

  const [editedTodo, setEditedTodo] = useState(todo);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    props.editTodo(editedTodo.id, editedTodo);
    setEdit(!edit);
  };

  return (
    <div className="todo">
      {!edit ? (
        <div className="todo-category-text">
          <div className="todo-category title">{editedTodo.title}</div>
          <div className="todo-category description">
            {editedTodo.description}
          </div>
        </div>
      ) : (
        <form className="todo-category-text" onSubmit={(e) => submit(e)}>
          <div className="todo-category title">
            <input
              name="title"
              value={editedTodo.title}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="todo-category description">
            <input
              name="description"
              value={editedTodo.description}
              onChange={handleInputChange}
            ></input>
          </div>
          <button style={{ display: "none" }}></button>
        </form>
      )}

      <div className="todo-category dropdown">
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ width: "4rem" }}
            size="sm"
          >
            {actualSeverity}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) => setActualSeverity(e.target.innerHTML)}
            >
              Low
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setActualSeverity(e.target.innerHTML)}
            >
              Med
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setActualSeverity(e.target.innerHTML)}
            >
              High
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="todo-category dropdown">
        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{ width: "4rem" }}
            size="sm"
          >
            {actualStatus}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={(e) => setActualStatus(e.target.innerHTML)}>
              To do
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setActualStatus(e.target.innerHTML)}>
              Doing
            </Dropdown.Item>
            <Dropdown.Item onClick={(e) => setActualStatus(e.target.innerHTML)}>
              Done
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="todo-category action">
        <FaRegEdit className="action-icon" onClick={() => setEdit(!edit)} />
      </div>
      <div className="todo-category action">
        <RiDeleteBin6Line
          className="action-icon"
          onClick={() => props.deleteTodo(todo._id)}
        />
      </div>
    </div>
  );
}

export default Todo;
