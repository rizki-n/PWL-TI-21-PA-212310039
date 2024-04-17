import { useState, useMemo } from 'react';
import React from 'react'; 
import TodoSearch from './TodoSearch';
import '../index.css'

const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [filter, setFilter] = useState('all'); // State untuk filter aktif
    const [searchQuery, setSearchQuery] = useState("");


    const filteredTodos = useMemo(() => {
        let filtered = todo;
        if (filter === 'done') {
            filtered = filtered.filter(t => t.completed);
        } else if (filter === 'todo') {
            filtered = filtered.filter(t => !t.completed);
        }
        if (searchQuery) {
            filtered = filtered.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        return filtered;
    }, [todo, filter, searchQuery]);
    

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const checklist = id => {
        setTodo(todo.map(item => item.id === id ? { ...item, completed: !item.completed } : item ));
    }

    const deleteTask = id => {
        setTodo(todo.filter(t => t.id !== id));
    }

    const deleteAllTasks = () => {
        setTodo([]);
    }

    const deleteDoneTasks = () => {
        setTodo(todo.filter(t => !t.completed));
    }

    const editTask = id => {
        setTodo(todo.map(t => t.id === id ? { ...t, isEditing: !t.isEditing } : t ));
    }

    return (
        <div className='container'>
            <div>
                <h1>To Do Search</h1>
                <TodoSearch todo={todo} setTodo={setTodo} setSearchQuery={setSearchQuery} />


                <h1>To Do List</h1>
                <div className=''>
                    <button onClick={() => handleFilterChange('all')} className='filterButton'>All</button>
                    <button onClick={() => handleFilterChange('done')} className='filterButton'>Done</button>
                    <button onClick={() => handleFilterChange('todo')} className='filterButton'>To Do</button>
                </div>

                <ol>
                    {filteredTodos.map(todos => (
                        <li className='' key={todos.id}>
                            <span 
                            className={`text ${todos.completed ? 'completed' : ''}`} 
                            >{todos.name}</span>
                            <button onClick={() => checklist(todos.id)} className='searchButton'>✔</button>
                            <button onClick={() => deleteTask(todos.id)} className='deleteFilterButton'>🗑</button>
                            <button onClick={() => editTask(todos.id)} className='addButton'>✏</button>
                        </li>   
                    ))}
                </ol>
                <div>
                    <button onClick={deleteAllTasks} className='deleteFilterButton'>Delete All Tasks</button>
                    <button onClick={deleteDoneTasks} className='deleteFilterButton'>Delete Done Tasks</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
