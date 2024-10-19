import React, { useEffect } from 'react';
import { useTask } from '../contexts/TaskContext';
import { MdModeEdit as Edit, MdDelete as Delete } from "react-icons/md";
import { Link } from 'react-router-dom';

function TaskList() {
  const { tasks, isLoading, setIsLoading, fetchUserTasks, deleteTask } = useTask();

  useEffect(() => {
    setIsLoading(true);
    fetchUserTasks(); 
    setIsLoading(false);
  }, [fetchUserTasks, setIsLoading]);

  const sortedTasks = [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="body-font text-gray-200 py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap -m-4">
          {isLoading ? (
            <h1 className="text-center text-white">Loading....</h1>
          ) : (
            sortedTasks.map((task) => (
              <div key={task._id} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <div className="h-full bg-blue-700 rounded-lg p-6 flex flex-col justify-between shadow-md">
                  <div className="flex-grow">
                    <h2 className="text-lg font-semibold mb-2">{task.taskName}</h2>
                    <p className="text-gray-400">{task.taskDescription}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <Link to={`/edit-task/${task._id}`} state={task}>
                      <Edit size={20} className='text-blue-300 hover:text-blue-400 cursor-pointer' />
                    </Link>
                    <Delete
                      onClick={() => deleteTask(task._id)}
                      size={20}
                      className='text-red-500 hover:text-red-400 cursor-pointer'
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default TaskList;
