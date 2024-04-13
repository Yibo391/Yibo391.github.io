import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask(''); // Clear input after adding
        }
    };

    const handleRemoveTask = (index) => {
        const newTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(newTasks);
    };

    const moveTask = (index, direction) => {
        const newPosition = index + direction;
        if (newPosition < 0 || newPosition >= tasks.length) return; // Prevent moving out of array bounds

        const newTasks = [...tasks];
        const itemToMove = newTasks.splice(index, 1)[0];
        newTasks.splice(newPosition, 0, itemToMove);
        setTasks(newTasks);
    };

    return (
        <div className="container mt-3">
            <h2 className="mb-3">Todo List</h2>
            <div className="input-group mb-3">
                <input 
                    type="text"
                    className="form-control"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
                </div>
            </div>
            <ul className="list-group">
                {tasks.map((t, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        {t}
                        <div>
                            <button className="btn btn-secondary btn-sm mx-1" onClick={() => moveTask(index, -1)}>&uarr;</button>
                            <button className="btn btn-secondary btn-sm mx-1" onClick={() => moveTask(index, 1)}>&darr;</button>
                            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveTask(index)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
