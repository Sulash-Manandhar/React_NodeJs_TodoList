import React from 'react'
import Todo from './Todo'
import './style.css'

export default function ToDoList({todos, toggleTodos}) {
    return (
       todos.map(item=>{
           return <Todo key={item.id} todo={item} toggleTodos={toggleTodos}/>
       })
    )
}
