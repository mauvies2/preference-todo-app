import React from "react";

function Todo() {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Severity</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-light">
            <th scope="row">
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="1"
                ></textarea>
              </div>
            </th>
            <td>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="1"
                ></textarea>
              </div>
            </td>
            <td>
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop3"
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop3"
                  >
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop3"
                    type="button"
                    className="btn btn-info dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnGroupDrop3"
                  >
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                    <a className="dropdown-item" href="#">
                      Dropdown link
                    </a>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Todo;
