const express = require("express");
const router = express.Router();

const {
  fetchAllTasks,
  fetchTask,
  addTask,
  addSubTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// Fetch all Tasks : // ** GET "/api/v1/Tasks/fetchTasks".
router.get("/fetchTasks", fetchAllTasks);

// Fetch single Task : // ** GET "/api/v1/Tasks/fetchTasks".
router.get("/fetchTask/:id", fetchTask);

// Add a Task : // ** POST "/api/v1/Tasks/addTask".
router.post("/addTask", addTask);

// Add a Sub Task : // ** PUT "/api/v1/Tasks/addSubTask/:id".
router.put("/addSubTask/:id", addSubTask);

// Update a Task : // ** PUT "/api/v1/Tasks/updateTask/:id".
router.put("/updateTask/:id", updateTask);

// Delete a Task : // ** DELETE "/api/v1/Tasks/deleteTask/:id".
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
