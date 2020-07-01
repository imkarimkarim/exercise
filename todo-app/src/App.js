import React, { Component } from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import './index.css'

class App extends Component {
  state = {
    todos: [
      {text:"buy coffe", id: 1},
      {text:"drink more water", id: 2}
    ]
  }
  addTask = (task) =>{
  try{
    task.id = this.state.todos[this.state.todos.length - 1].id + 1;
  }
  catch{
    task.id = 1;
  }
    const tmpState = [...this.state.todos, task];
    this.setState({todos: tmpState});
  }
  removeTask = (id) =>{
    const tmpState = this.state.todos.filter(task =>{
      return task.id !== id;
    })
    this.setState({todos: tmpState})
  }
  render(){
    return (
      <div className="App">
        <h3 className="center">myTodoApp</h3>
        <Tasks todos={this.state.todos} removeTask={this.removeTask} />
        <AddTask  addTask={this.addTask} />
      </div>
    );    
  }

}

export default App;