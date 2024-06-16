import React from "react";

export default function TodoSearch() {
  return (
    <div>
      <h1 className="text-center">To Do Search</h1>

      <header className="p-3 text-bg-dark">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
            </a>

            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" 
              className="form-control form-control-dark text-bg-dark" 
              placeholder="Search..." 
              aria-label="Search" />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Search</button>
              <button type="button" className="btn btn-warning">Add New Task</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
