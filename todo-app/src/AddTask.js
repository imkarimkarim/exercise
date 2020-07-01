import React, { Component } from 'react'

class AddTasks extends Component {
    state = {
        task:{
            text: ''
        }
    }
    submitHandler = (e) =>{
        e.preventDefault();
        if(this.state.task.text !== ''){
            this.props.addTask(this.state.task);
        }
        this.setState({task: {text: ''}});
    }
    textChangeHandler = (e) =>{
        this.setState({task: {text: e.target.value}});
    }
    render(){
        return(
            <div className="row container center">
                <form onSubmit={this.submitHandler}>
                    <input className="purple-text" type="text" placeholder="add new todo" onChange={this.textChangeHandler} value={this.state.task.text}/>
                    <button className="btn purple darken-1">Add</button>
                </form>
            </div>
        )
    }
}

export default AddTasks