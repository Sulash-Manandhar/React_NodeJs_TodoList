import React from 'react';
import './style.css'

export default function Todo({ todo, toggleTodos }) {

    function handleTodoClick(){
        toggleTodos(todo.id)

    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                <span class="span">{todo.name}</span>
            </label>
        </div>
    )
}
