const router = require("express").Router();
const {
  getAllTasks,
  getUserTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

router.route("/").get(getAllTasks).post(authMiddleware, createTask);

router.get("/userHabits", authMiddleware, getUserTasks);

router
  .route("/:id")
  .put(authMiddleware, updateTask)
  .delete(authMiddleware, deleteTask);

module.exports = router;
