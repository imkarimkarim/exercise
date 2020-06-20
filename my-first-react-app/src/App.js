import React, { Component } from 'react';
import User from './User';

class App extends Component {
  state = {
    Users: [
      {name: "Karim", age: 19, sport: "Futsal", id: 1},
      {name: "Alireza", age: 21, sport: "Basketball", id: 2},
      {name: "Reza", age: 18, sport: "Ping-Pong", id: 3},
      {name: "Mmd", age: 20, sport: "Street Soccer", id: 4}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome :)</p>
        <User Users= { this.state.Users } />
      </div>
    );  
  }  
}

export default App;
