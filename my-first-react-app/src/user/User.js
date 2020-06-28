import React from 'react';

// UI Component
const User = ({Users}) => {
        const UserList = Users.map(user =>{

            if(user.age > 18){            
                return (            
                <div className="user" key={user.id}>
                    <div>Name: { user.name }</div>
                    <div>Age: { user.age }</div>
                    <div>Sport: { user.sport }</div>
                    <hr></hr>
                </div>
                )
            }
            else{
                return null
            }
            
        });
        return (
            <div>
                { UserList }
            </div>
        )    
}
export default User