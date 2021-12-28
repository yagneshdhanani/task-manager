import React, { useState, useContext } from "react";

import taskContext from "../../context/task/taskContext";
export default function Form() {
  const { addTask } = useContext(taskContext);
  const [task, setTask] = useState({ name: "", date: "", description: "" });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    addTask(task.name, task.description, task.date);
    setTask({ name: "", date: "", description: "" });
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-md mx-auto my-10 bg-zinc-50 p-5 rounded-md shadow-sm">
        <div className="text-center">
          <h1 className="my-3 text-3xl font-semibold text-black ">Add Task</h1>
        </div>
        <div className="m-7">
          <form id="form" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                value={task.name}
                onChange={handleChange}
                className="w-full px-3 py-2 placeholder-white-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="date"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="dd-mm-yyyy"
                value={task.date}
                onChange={handleChange}
                className="w-full px-3 py-2 placeholder-white-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Task
              </label>

              <textarea
                rows="3"
                name="description"
                id="description"
                placeholder="Description"
                required
                value={task.description}
                onChange={handleChange}
                className="w-full px-3 py-2 placeholder-white-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Create Task
              </button>
            </div>
            <p className="text-base text-center text-gray-400" id="result"></p>
          </form>
        </div>
      </div>
    </div>
  );
}
