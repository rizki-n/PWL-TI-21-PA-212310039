import React from 'react';
import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import '../index.css'

const TodoSearch = ({todo, setTodo, setSearchQuery}) => {
    const [task, setTask] = useState("")
    const resultData = useMemo(() => {
        let findData = task
    })

    const handleSearch = e =>{
        setSearchQuery(task);
    }
    
    const onInputChange = e => {
        setTask(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodo([...todo, {id: uuidv4(), name:task, completed: false}])
        setTask('')
        setSearchQuery('')
    }
    return (
        <div>
            <form className=''>
                <input type='text' className=''
                    value={task}
                    placeholder='Search...'
                    onChange={onInputChange}
                />
                {/* <input type='text' className=''
                    placeholder='Search...'
                    onChange={handleSearch}
                /> */}
                <button type='button' onClick={handleSearch} className='searchButton'>Search</button>
                <button type='submit' onClick={handleSubmit} className='addButton'>Add New Task</button>
            </form>
        </div>
    );
}

export default TodoSearch;
