import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export const TaskContext = createContext(null);

export const TaskContextProvider = ({ children }) => {
  const { user } = useAuth();
  const { token } = user;
  const [isLoading, setIsLoading] = useState(false);
  const TASK_API_URL = "http://localhost:4000/api/taskRoute"; 

  const [tasks, setTasks] = useState([]);

  const fetchAllTasks = async () => {
    try {
      const response = await axios.get(`${TASK_API_URL}`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addNewTask = async (newTask) => {
    try {
      const response = await axios.post(`${TASK_API_URL}`, newTask, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const fetchUserTasks = async () => {
    try {
      const response = await axios.get(`${TASK_API_URL}/userTasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching user tasks:", error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await axios.put(`${TASK_API_URL}/${id}`, updatedTask, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedTasks = tasks.map((task) =>
        task._id === id ? response.data : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      try {
        await axios.delete(`${TASK_API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(tasks.filter((task) => task._id !== id));
      } catch (error) {
        console.error("Error deleting task:", error);
      }
    }
  };

  useEffect(() => {
    if (token) {
      fetchAllTasks();
    }
  }, [token]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        isLoading,
        setIsLoading,
        setTasks,
        fetchAllTasks,
        addNewTask,
        fetchUserTasks,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
