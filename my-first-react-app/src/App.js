import React, { Component } from 'react';
import User from './User';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome :)</p>
        <User name="Karim" age="19" sport="Basketball" />
        <User name="Alireza" age="19" sport="Futsal" />
      </div>
    );  
  }  
}

export default App;
