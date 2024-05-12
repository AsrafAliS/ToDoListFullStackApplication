import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function EditToDo() {
    const { id } = useParams(); // Extracting the ID from URL parameter
    const [task, setTask] = useState({
        title: '',
        description: '',
        completed: false
    });

    useEffect(() => {
        // Fetch task details by ID when the component mounts
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:8040/tasktodisplay/${id}`);
                setTask(response.data);
            } catch (error) {
                console.error('Error fetching task:', error);
            }
        };

        fetchTask();
    }, [id]); // Dependency on ID to fetch the correct task

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
            await axios.put(`http://localhost:8040/TaskToUpdate/${id}`, task);
            // Redirect to home page after successful update
            window.location.href = '/tohome';
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Task To Do</h2>
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
                        <button type='submit' className='btn btn-outline-primary'>Update Task</button>
                        <Link className='btn btn-outline-danger mx-2' to="/tohome">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
