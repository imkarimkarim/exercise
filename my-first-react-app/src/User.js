import React from 'react';

const User = ({Users}) => {
        const UserList = Users.map(user =>{
            return (            
            <div className="user" key={user.id}>
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

export default User