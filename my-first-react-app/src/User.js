import React, { Component } from 'react';

class User extends Component{
    render() {
        const { name, age, sport } = this.props;
        return (
            <div className="user">
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Sport: { sport }</div>
            </div>
        )
    }
}

export default User