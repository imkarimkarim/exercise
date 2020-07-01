import React from 'react';

const Tasks = ({todos}) =>{

        const tmpTodos = todos.map(todo =>{
            return(
        <div className="collection" key={todo.id}>
            <p>{todo.text}</p>
        </div>
                        
            )
        })
        
        return(
        <div className="row container center">
            <div className="tasks">
                {tmpTodos}
            </div>
        </div>
        )
}

export default Tasks;