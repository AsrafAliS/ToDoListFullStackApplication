import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImage from '../images/bg1.jpg';

const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw', // Ensure container spans entire viewport width
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

 
  


export default function Home() {

    const [ToDoLists, setToDoLists] = useState([]);

    useEffect(() => {
        loadToDoLists();
    }, []);

    const loadToDoLists = async () => {
        const result = await axios.get("http://localhost:8040/todolists")
        setToDoLists(result.data);
    }


    const handleUpdate = (id) => {
        // Redirect to the EditToDo form with the ID as a URL parameter
        window.location.href = `/edit/${id}`;
    }
    

    const handleDelete = async (id) => {
        try {
            // Send DELETE request to backend to delete task with specified ID
            await axios.delete(`http://localhost:8040/tododelete/${id}`);
            // After successful deletion, reload the task list
            loadToDoLists();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }

    const handleComplete = async (id) => {
        try {
            await axios.put(`http://localhost:8040/markComplete/${id}`);
            loadToDoLists();
        } catch (error) {
            console.error('Error marking task as complete:', error);
        }
    };

    const handleIncomplete = async (id) => {
        try {
            await axios.put(`http://localhost:8040/markIncomplete/${id}`);
            loadToDoLists();
        } catch (error) {
            console.error('Error marking task as incomplete:', error);
        }
    };
    

    return (
        <div className='container' style={containerStyle}>
            <div className='py-4'>
                <table className="table border shadow"  >
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Task Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Completed</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ToDoLists.map((list, index) => (
                            <tr key={index}>
                                <td>{list.id}</td>
                                <td>{list.title}</td>
                                <td>{list.description}</td>
                                <td>{list.completed ? 'Completed' : 'Not Completed'}</td>
                                <td>
                                    <button className="btn btn-primary me-2 rounded-0" onClick={() => handleUpdate(list.id)}>Update</button>
                                    <button className="btn btn-danger me-2" onClick={() => handleDelete(list.id)}>Delete</button>

                                    {list.completed ? (
                                        <button className="btn btn-success me-2" onClick={() => handleIncomplete(list.id)}>Incomplete</button>
                                    ) : (
                                        <button className="btn btn-warning me-2" onClick={() => handleComplete(list.id)}>Complete</button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
