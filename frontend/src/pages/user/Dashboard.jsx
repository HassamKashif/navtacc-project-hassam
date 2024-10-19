import React from "react";
import TaskList from "../../components/TaskList";
import { Link } from "react-router-dom";
import Percentage from "../../components/Percentage";

function Dashboard() {
  return (
    <>
      <div className="container mx-auto  text-black min-h-screen p-6 ">
        <h1 className="text-5xl text-center mt-12 font-bold text-blue-600">
          Task Lists
        </h1>
        <div className="flex justify-center mt-8">
          <Link
            to={"/addtask"}
            className="inline-block text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-400 rounded shadow-md transition duration-200"
          >
            Add Task
          </Link>
        </div>

        <div className="mt-12">
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
