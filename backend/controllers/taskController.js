const asyncHandler = require("express-async-handler");
const Task = require("../models/taskModel");
const User = require("../models/useModel");

// Get all tasks (admin feature or general)
const getAllTasks = asyncHandler(async (request, response) => {
  const allTasks = await Task.find();
  response.status(200).json(allTasks);
});

// Get tasks for the logged-in user
const getUserTasks = asyncHandler(async (request, response) => {
  const tasks = await Task.find({ user: request.user._id });

  if (!tasks.length) {
    return response.status(404).json({ message: "No tasks found for this user" });
  }

  response.status(200).json(tasks);
});

// Create a new task
const createTask = asyncHandler(async (request, response) => {
  const { taskName, taskDescription } = request.body;

  if (!taskName || !taskDescription) {
    return response
      .status(400)
      .json({ message: "Please provide complete task details" });
  }

  const newTask = await Task.create({
    taskName,
    taskDescription,
    user: request.user._id, 
  });

  response.status(201).json(newTask);
});


const updateTask = asyncHandler(async (request, response) => {
  const taskId = request.params.id;

  if (!taskId) {
    return response.status(400).json({ message: "Please provide task ID" });
  }

  const task = await Task.findById(taskId);
  if (!task) {
    return response.status(404).json({ message: "Task not found" });
  }

  const user = await User.findById(request.user._id);
  if (!task.user.equals(user._id)) {
    return response
      .status(401)
      .json({ message: "Unauthorized user cannot update this task" });
  }

  const updatedTask = await Task.findByIdAndUpdate(taskId, request.body, {
    new: true,
  });
  response.status(200).json(updatedTask);
});


const deleteTask = asyncHandler(async (request, response) => {
  const taskId = request.params.id;

  if (!taskId) {
    return response.status(400).json({ message: "Please provide task ID" });
  }

  const task = await Task.findById(taskId);
  if (!task) {
    return response.status(404).json({ message: "Task not found" });
  }

  const user = await User.findById(request.user._id);
  if (!task.user.equals(user._id)) {
    return response
      .status(401)
      .json({ message: "Unauthorized user cannot delete this task" });
  }

  await Task.findByIdAndDelete(taskId);
  response.status(200).json({ message: `Task with id: ${taskId} deleted` });
});

module.exports = {
  getAllTasks,
  getUserTasks,
  createTask,
  updateTask,
  deleteTask,
};
