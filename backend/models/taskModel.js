const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true
    },
    taskDescription: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task