import React, { Component } from 'react';

// Container Component
class AddUser extends Component {
    state = {
        name: null,
        age: null,
        sport: null
    }
    textChange = (e) =>{
        // updating state
        this.setState({[e.target.id]: e.target.value})
    }
    fromSubmit = (e) =>{
        e.preventDefault();
        this.props.addToUsers(this.state);
    }
    render(){
        return(
                <form onSubmit={this.fromSubmit}>
                    <input type="text" id="name" placeholder="name" onChange={this.textChange} />
                    <input type="text" id="age" placeholder="age" onChange={this.textChange} />
                    <input type="text" id="sport" placeholder="sport" onChange={this.textChange} />
                    <button onClick={this.fromSubmit}>Submit</button>
                </form>
        )
    }
}

export default AddUser