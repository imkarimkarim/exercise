import './App.css'
import { useState } from 'react';

function App() {
  const [name, setName] = useState("imkarimkarim");
  const changeName = () => {
    const tmpName = name === "imkarimkarim" ? "alirez" : "imkarimkarim";
    setName(tmpName);
  }

  return (
    <div className="App">
      <div onClick={changeName} id="name">{name}</div>
    </div>
  )
}

export default App
