import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTask } from "../../contexts/TaskContext";

function EditTask() {
  const { updateTask } = useTask();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check what is being passed in location.state
  console.log(location.state);

  // Destructure with a fallback
  const { _id, taskName, taskDescription } = location.state || {};

  // Handle case where state is not provided
  if (!_id) {
    return <div>Task not found or invalid state.</div>;
  }

  const [editTask, setEditTask] = useState({
    _id,
    taskName,
    taskDescription,
  });

  const handleChange = (e) => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await updateTask(_id, editTask);
      alert("Task updated");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 text-blue-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black">
            Edit Task
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Task Title</label>
                <input
                  type="text"
                  name="taskName"
                  placeholder="Enter Task Title"
                  value={editTask.taskName}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 placeholder-white rounded border border-gray-600 focus:border-blue-600 focus:bg-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-blue-600py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Description</label>
                <textarea
                  name="taskDescription"
                  placeholder="Enter task description"
                  value={editTask.taskDescription}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 placeholder-white rounded border border-gray-600 focus:border-blue-600 focus:bg-gray-700 focus:ring-2 focus:ring-gray-700 h-32 text-base outline-none text-blue-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-black bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg cursor-pointer">
                Update Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default EditTask;
