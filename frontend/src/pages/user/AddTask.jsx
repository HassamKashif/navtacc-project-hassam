import React, { useState } from 'react';
import { useTask } from '../../contexts/TaskContext'; 
import { Link, useNavigate } from 'react-router-dom';

function AddTask() {
    const { addNewTask } = useTask();
    const navigate = useNavigate();

    const [newTask, setNewTask] = useState({
        taskName: "",
        taskDescription: "",
    });

    const handleChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            await addNewTask(newTask);
            alert("New task added");
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-200 text-gray-800 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-blue-500">Add New Task</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-800">Task Title</label>
                                <input
                                    type="text"
                                    name="taskName"
                                    placeholder='Enter Task Title'
                                    value={newTask.taskName}
                                    onChange={handleChange}
                                    className="w-full bg-white bg-opacity-90 placeholder-gray-400 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label className="leading-7 text-sm text-gray-800">Description</label>
                                <textarea
                                    name="taskDescription"
                                    placeholder='Enter task description'
                                    value={newTask.taskDescription}
                                    onChange={handleChange}
                                    className="w-full bg-white bg-opacity-90 placeholder-gray-400 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500 h-32 text-base outline-none text-gray-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-500 rounded text-lg">
                                Add Task
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddTask;
