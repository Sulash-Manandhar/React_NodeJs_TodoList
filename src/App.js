import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import uuidv4 from 'uuid/dist/v4';
import './style.css'

const LOCAL_STORAGE_KEY ="todoApp.todos"

function App() {
  const [ todos, setTodos] = useState([])
  const todoNameRef = useRef(); //referencing the input tag type is text
 
  //fetch items from the local storage and stores it into the setTodos
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    setTodos(storedTodos)
  },[])

  //add item to local storage when dependencies are changed. It our terms its todos
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  },[todos])

  function toggleTodos(id){
     const newTodos=[...todos]
     const todo = newTodos.find(todo=>todo.id == id)
     todo.complete= !todo.complete
     setTodos(newTodos)
  }

  //takes input from the input tag and add to todos.
  function handleAddTodo(e){
    const name = todoNameRef.current.value  //storing the value of input 
    if(name === '') return  // error handling
    console.log(name) //displaying the input value 

    setTodos(previousTodo=>{
      return([...previousTodo,{id: uuidv4(),name:name, complete:false}])
    })
    todoNameRef.current.value = null //default value
  }

  function handleclearTodos(){
    const newTodos = todos.filter(todo=>!todo.complete)
    setTodos(newTodos)
  }
  
  return(
    <>
      <h1>ToDo List</h1>
      <div>Remaining Todo: {todos.filter(todo=>!todo.complete).length}</div>
      <hr/>
      <div>
        <TodoList todos={todos} toggleTodos={toggleTodos}/>
      </div>
  
      <div>
        <input ref={todoNameRef} type="text" placeholder="Add a todo to list...."/>
      </div>
      <div>
      <button onClick={handleAddTodo} className="addBtn">Add Todo</button>
      <button onClick={handleclearTodos} className="clearBtn">Clear completed</button>
      </div>
      
    </>
  );
}

export default App;
