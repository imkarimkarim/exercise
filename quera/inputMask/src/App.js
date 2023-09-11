import React, { useState } from "react";
import Input from "./Input";
import cities from "./cities.json";

function App() {
  const [hint, setHint] = useState("");

  const handleChange = (e) => {
    if (e.target.value === "") {
      setHint("");
    } else {
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].includes(e.target.value)) {
          setHint(cities[i]);
          i = cities.length;
        }
        if (i === cities.length - 1 && !cities[i].includes(e.target.value)) {
          setHint("");
        }
      }
    }
  };

  return (
    <div>
      <Input handleChange={handleChange} hint={hint} />
    </div>
  );
}

export default App;
