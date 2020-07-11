import React, { Component } from 'react';
import User from './user/User';
import AddUser from './user/AddUser';

// Container Component
class App extends Component {
  state = {
    Users: [
      {name: "Karim", age: 19, sport: "Futsal", id: 1},
      {name: "Alireza", age: 21, sport: "Basketball", id: 2},
      {name: "Reza", age: 18, sport: "Ping-Pong", id: 3},
      {name: "Mmd", age: 20, sport: "Street Soccer", id: 4}
    ]
  }
  addToUsers = (objUser)=>{
    objUser.id = 1 + this.state.Users.length;
    let tmpUsers = [...this.state.Users, objUser];
    this.setState({
      Users: tmpUsers
    });
  }
  removeFromUsers = (userId) =>{
    let tmpUsers = [...this.state.Users];
    tmpUsers = tmpUsers.filter(usr =>{  
      return usr.id !== userId 
    })
    this.setState({Users: tmpUsers})
  }
  render(){
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>Welcome :)</p>
        <User Users= { this.state.Users } removeFromUsers= {this.removeFromUsers} />
        <AddUser addToUsers= { this.addToUsers }/>
      </div>
    );  
  }  
}

export default App;