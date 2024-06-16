import React from "react";
import { useState } from "react";

export default function TodoInput({addNewTask}) {
  //membuat setter dan getter untuk inputan pada TodoInput
  const [newTask, setNewTask] = useState('')

  //untuk menghandle perubahan pada onChange
  function handleInputChange(e){
    setNewTask(e.target.value);
  } 

  //handler tombol submit
  function handleSubmit(e){
    if (newTask.trim())  {
      addNewTask(newTask);
      setNewTask('') //agar nilai setter inputan kosong kembali setelah klik submit
    }
  }

  const backgroundStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "85vh",
  };


  return (
    <div style={backgroundStyle}>
      {" "}
      {/* Menambahkan style ke div */}
      <br />
      <div className="container">
        <h1 className="text-center text-black fw-bold">To Do Input</h1>
        
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" onSubmit={(e) => {e.preventDefault(); handleSubmit(); }}>
          <input
            type="text"
            className="form-control form-control-white text-bg-white"
            placeholder="Add new task..."
            value={newTask}
            onChange={(e) => set}
          />
        </form>
        
        <div className="d-flex justify-content-center gap-2">
          <button type="submit" className="btn btn-warning" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      
      </div>
    </div>
  );
}
