import React, { useEffect, useReducer } from 'react'
import {todoReducer} from './todoReducer'
import './style.css'
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init=()=>{

    return JSON.parse(localStorage.getItem('todos')) || [];
    
};
const TodoApp = () => {
    
    const [todos,dispatch] = useReducer(todoReducer, [], init);
    
    
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
        
    }, [todos])

    const handleDelete = (todoId) =>{
        //console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }
    const handleAdd = (newTodo) =>{
        dispatch({
            type:'add',
            payload:newTodo
        });
    }
    
    return (
        <div>
            <h1>TodoApp ({todos.length}) </h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                    {/*TodoList,(todos),handleDelete,handleToggle*/}
                    <TodoList 
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                    
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAdd={handleAdd}
                    />
                </div>
                
            
            </div>
        </div>
    )
}

export default TodoApp
