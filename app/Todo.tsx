"use client"
import React, { useState } from 'react';

export default function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([
        { todoText: "hello", completed: false },
        { todoText: "world", completed: false },
        { todoText: "he", completed: true },
    ]);

    const onClickHandler = (myelm : any) => {
        const newTodos = todos.map(todo => {
            if (todo.todoText === myelm.todoText) {
                todo.completed = !todo.completed; //convert false to true and true to false
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo = () => {
        const newTodo = { todoText: todo, completed: false };
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo("");
    };

    const deleteTodo = (myTodo : any) => {
        const newTodos = todos.filter(todo => todo.todoText !== myTodo.todoText);
        setTodos(newTodos);
    };

    return (
        <div className='mt-5 flex flex-col items-center justify-center bg-gray-500 rounded-full mb-10'>
            <h1 className='text-4xl font-bold p-4'>Todo App</h1>
            <input className="border border-blue-400" type="text" placeholder='enter your task' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className='bg-green-500 p-2 rounded m-2 hover:bg-green-600' onClick={addTodo}>Add Task</button>
            <ul>
                {todos.map((elm, index) => (
                    <li key={index} style={{
                        color: elm.completed ? "green" : "yellow",
                        fontStyle: 'oblique'
                    }}>
                        <input type="checkbox" checked={elm.completed} onChange={() => onClickHandler(elm)} />
                        {elm.todoText}
                        <button onClick={() => deleteTodo(elm)} className='bg-red-500 p-2 rounded ml-4 m-3'>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
