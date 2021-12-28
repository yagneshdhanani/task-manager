const mongoose = require("mongoose");

const Task = require("../models/Task");
const { taskValidation } = require("../middleware/taskValidation");

// Fetch all Tasks : // ** GET "/api/v1/Tasks/fetchTasks".  Login required
const fetchAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

// Fetch single Tasks : // ** GET "/api/v1/Tasks/fetchTask/:id".  Login required
const fetchTask = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(401).send({ error: "Invalid ID" });

  const taskObj = await Task.findById(req.params.id);

  // Check if task is available
  if (!taskObj) return res.status(404).send({ message: "Task not found" });

  try {
    res.status(200).send(taskObj);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add a Task : // ** POST "/api/v1/Tasks/addTask". Login required
const addTask = async (req, res) => {
  // Validate Task data
  const { error } = taskValidation(req.body);
  if (error) return res.status(400).json({ error: error.message });

  const { name, description, date } = req.body;

  // Creating Task object
  const taskObj = new Task({ name, description, date });

  try {
    const newTask = await taskObj.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Add a Sub Task : // ** PUT "/api/v1/Tasks/updateTask/:id". Login required
const addSubTask = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(401).send({ message: "Invalid ID" });

  const oldTask = await Task.findById(req.params.id);

  // Check if Task is available
  if (!oldTask) return res.status(404).send({ message: "Task not found" });

  const { subTask } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        $set: { subTask },
      },
      { new: true }
    );
    console.log("subTask", updatedTask);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Task : // ** PUT "/api/v1/Tasks/updateTask/:id". Login required
const updateTask = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(401).send({ message: "Invalid ID" });

  const oldTask = await Task.findById(req.params.id);

  // Check if Task is available
  if (!oldTask) return res.status(404).send({ message: "Task not found" });

  const { name, description, date, isCompleted } = req.body;

  // updated Task object
  const newTask = {
    name: name || oldTask.name,
    description: description || oldTask.description,
    date: date || oldTask.date,
    isCompleted: isCompleted,
  };

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        $set: newTask,
      },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Task : // ** DELETE "/api/v1/Tasks/deleteTask/:id". Login required
const deleteTask = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: "Invalid ID" });

  const taskObj = await Task.findById(req.params.id);

  // Check if Task is available
  if (!taskObj) return res.status(404).send({ message: "Task not found" });

  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Task deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  fetchAllTasks,
  fetchTask,
  addTask,
  addSubTask,
  updateTask,
  deleteTask,
};
