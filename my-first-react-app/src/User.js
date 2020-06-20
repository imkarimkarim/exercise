import React, { Component } from 'react';

class User extends Component{
    render() {
        const { Users } = this.props;
        const UserList = Users.map(user =>{
            return (            
            <div className="user">
                <div>Name: { user.name }</div>
                <div>Age: { user.age }</div>
                <div>Sport: { user.sport }</div>
                <hr></hr>
                {/* {console.log(user)} */}
            </div>
            )
        });
        return (
            <div>
                { UserList }
            </div>
        )
    }
}

export default User