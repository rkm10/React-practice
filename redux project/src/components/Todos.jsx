import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {

    const dispatch = useDispatch();



    const todos = useSelector((state) => state.todos)
    return (
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <>
                    <div key={todo.id}>{todo.text}</div>
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </>
            ))}
        </>
    )
}
export default Todos