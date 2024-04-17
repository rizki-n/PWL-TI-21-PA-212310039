import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "../component/TodoList";
import TodoSearch from "../component/TodoSearch";


//masih testing
export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<TodoList/>}/>
        <Route path="/input" element={<TodoSearch/>} />
      </Routes>
    </React.Suspense>
  );
}
