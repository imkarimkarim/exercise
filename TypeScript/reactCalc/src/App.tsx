import React, { useState } from "react";
import { Calc } from "./InterFaces";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator/Calculator";
import "hover.css/css/hover.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
    </div>
  );
}

export default App;
