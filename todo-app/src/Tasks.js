import React from 'react';

const Tasks = ({todos, removeTask}) =>{
    let tmpTodos;
    if(todos.length > 0){
        tmpTodos = todos.map(todo =>{
            return(
        <div className="collection" key={todo.id} onClick={ () => { removeTask(todo.id) }}>
            <p>{todo.text}</p>
        </div>       
            )
        })
    }
    else{
        tmpTodos = [
            <p>There Is No more to do :)</p>
        ]
    }

    
    return(
    <div className="row container center">
        <div className="tasks">
            {tmpTodos}
        </div>
    </div>
    )
}

export default Tasks;