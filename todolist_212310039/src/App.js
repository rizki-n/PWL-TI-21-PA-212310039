
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BaseRoute from "./apps/BaseRoute";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <BaseRoute />
      </div> 
    </BrowserRouter>
  ); 
}

export default App;
