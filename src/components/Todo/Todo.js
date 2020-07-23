import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

import "./todo.scss";

function Todo({ todo }) {
  const { title, description, severity, status } = todo;
  const severityOpt = ["Low", "Med", "High"];
  const statusOpt = ["To do", "Doing", "Done"];

  const [editTitle, setEditTitle] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [actualSeverity, setActualSeverity] = useState(severityOpt[severity]);
  const [actualStatus, setActualStatus] = useState(statusOpt[status]);

  return (
    <div className="todo">
      <div className="todo-category">
        {!editTitle ? title : <textarea></textarea>}
      </div>
      <div className="todo-category description">
        {!editDescription ? description : <textarea></textarea>}
      </div>

      <div className="todo-category">
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
      <div className="todo-category">
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
        <FaRegEdit className="find-tour-icon" />
      </div>
      <div className="todo-category action">
        <RiDeleteBin6Line className="find-tour-icon" />
      </div>
    </div>
  );
}

export default Todo;
