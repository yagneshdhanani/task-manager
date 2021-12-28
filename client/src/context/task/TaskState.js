import { useState } from "react";

import TaskContext from "./taskContext";

const HOST = "http://localhost:5000/api/v1/tasks";

const TaskState = (props) => {
  const [tasks, setTasks] = useState([]);

  // Fetch all tasks
  const fetchTasks = async () => {
    console.log("fetchTasks");
    const response = await fetch(`${HOST}/fetchTasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const tasksRes = await response.json();
    console.log(tasksRes);
    setTasks(tasksRes);
  };

  // Add a new Task
  const addTask = async (name, description, date) => {
    const response = await fetch(`${HOST}/addTask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, date }),
    });
    if (response.status === 200) {
      const newTask = await response.json();
      setTasks(tasks.concat(newTask));
      console.log(response);
    } else {
      console.log(response);
    }
  };

  // Add Sub Task
  const addSubTask = async (_id, subTask) => {
    const response = await fetch(`${HOST}/addSubTask/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subTask }),
    });
    if (response.status === 200) {
      const updatedTask = await response.json();

      const index = tasks.findIndex((task) => task._id === _id);
      if (index !== -1)
        tasks[index] = {
          ...updatedTask,
        };

      const newTasks = JSON.parse(JSON.stringify(tasks));
      setTasks(newTasks);
      console.log("called", tasks);
    } else {
      console.log(response);
    }
  };

  // Update a Task
  const updateTask = async (
    _id,
    name,
    description,
    subTask,
    date,
    isCompleted
  ) => {
    const response = await fetch(`${HOST}/updateTask/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, subTask, date, isCompleted }),
    });
    if (response.status === 200) {
      const updatedTask = await response.json();

      const index = tasks.findIndex((task) => task._id === _id);
      if (index !== -1)
        tasks[index] = {
          ...updatedTask,
        };

      const newTasks = JSON.parse(JSON.stringify(tasks));
      setTasks(newTasks);
    } else {
      console.log(response);
    }
  };

  // Delete a Task
  const deleteTask = async (_id) => {
    const response = await fetch(`${HOST}/deleteTask/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      setTasks(tasks.filter((task) => task._id !== _id));
    } else {
      console.log(response);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, fetchTasks, addTask, addSubTask, updateTask, deleteTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
