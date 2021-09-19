import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Components/Header";
import Calculator from "./Components/Calculator/Calculator";
import Help from "./Help";
import "hover.css/css/hover.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/" component={Calculator} />
          <Route path="/help" component={Help} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
