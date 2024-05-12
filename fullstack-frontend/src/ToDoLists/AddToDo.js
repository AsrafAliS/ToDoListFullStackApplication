import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddToDo() {
    const [task, setTask] = useState({
        title: '',
        description: '',
        completed: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setTask({ ...task, completed: isChecked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8040/add', task);
            // Redirect to home page after successful addition
            window.location.href = '/tohome';
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Add Task To Do</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='title' className='form-label'>
                                Title
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter The Task Title'
                                name='title'
                                value={task.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='description' className='form-label'>
                                Description
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter The Description'
                                name='description'
                                value={task.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className='mb-3 form-check'>
                            <input
                                type='checkbox'
                                className='form-check-input'
                                id='completed'
                                checked={task.completed}
                                onChange={handleCheckboxChange}
                            />
                            <label className='form-check-label' htmlFor='completed'>
                                Completed
                            </label>
                        </div>
                        <button type='submit' className='btn btn-outline-primary'>Add Task</button>
                        <Link className='btn btn-outline-danger mx-2' to="/tohome">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
