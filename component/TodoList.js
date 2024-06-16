import React from "react";

export default function TodoList({ task, deleteTask, editTask, markTask }) {
  return (
    <div>
      <h1 className="text-center">To Do List</h1>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          {/* <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-white text-bg-white"
                placeholder="Search..."
                aria-label="Search"
              />
            </form> */}

          <div className="d-flex justify-content-center gap-2">
            <button type="button" className="btn btn-warning">
              All
            </button>
            <button type="button" className="btn btn-warning">
              Done
            </button>
            <button type="button" className="btn btn-warning">
              To do
            </button>
          </div>

        </div>
        <div>
          <ol>
            {task.map((task, taskId) =>
                <li key={taskId}>
                  <span className="text">{task}</span>
                  <button className="delete-button"
                  onClick={() => deleteTask(taskId)}>
                  🗑
                  </button>

                  <button className="edit-button"
                  onClick={() => editTask(taskId)}>
                  ✏
                  </button>

                  <input type="checkbox"
                  checked={task.checklist}
                  onChange={() => markTask(taskId)}></input>
                </li>
            )}
          </ol>    
        </div>

      </div>
    </div>
  );
}
