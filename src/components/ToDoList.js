import React from 'react';
import ToDo from './ToDo';
// import './App.css';
const ToDoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map((todo) =>(
                    <ToDo 
                    todos = {todos} 
                    setTodos = {setTodos} 
                    key = {todo.id} 
                    todo = {todo}
                    text = {todo.text} 
                    id = {todo.id}/>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;