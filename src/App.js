import React, { useEffect, useState } from "react";
import './App.css';
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

//Run only once use effect!
    useEffect(() => {
        getLocalTodos();
    }, [])
//Run many times use effect!
    useEffect(() => {
       filterHandler();
       saveLocalTodos();
    }, [todos, status])

    const filterHandler = () => {
        switch(status){
            case 'completed': 
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
                
        }
    }

    //Save to Local Storage.

    const saveLocalTodos = () => {
            localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalTodos = () => {
        if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        }
        else{
            let todoLocal = JSON.parse(localStorage.getItem('todos'));
            setTodos(todoLocal);
        }
    }
    return(
    <div className="App">
        <header>
            <h1>
                Q's To-Do List
            </h1>
            </header>
            <Form 
            todos = {todos} 
            setTodos = {setTodos} 
            inputText = {inputText} 
            setInputText = {setInputText}
            setStatus = {setStatus}
            />
            <ToDoList 
            todos = {todos} 
            setTodos = {setTodos}
            filteredTodos = {filteredTodos}
            />
    </div>
    )
}
export default App;