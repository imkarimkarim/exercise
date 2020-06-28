import React from 'react';

// UI Component
const User = ({Users, removeFromUsers}) => {
        const UserList = Users.map(user =>{

            if(user.age > 18){            
                return (            
                <div className="user" key={user.id}>
                    <span> Name: { user.name }</span> | 
                    <span> Age: { user.age }</span> | 
                    <span> Sport: { user.sport } </span>
                    <button onClick={() =>{ removeFromUsers(user.id) }}>Delet It!</button>
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