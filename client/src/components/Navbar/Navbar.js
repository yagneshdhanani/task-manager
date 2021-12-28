import React from "react";

export default function Navbar({ onAddTaskClick, onAddSubTaskClick }) {
  return (
    <nav className="font-sans flex sticky top-0 z-50 flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/home"
          className="text-2xl  no-underline text-grey-darkest hover:text-blue-dark"
        >
          Task Manager
        </a>
      </div>
      <div>
        <button
          onClick={onAddTaskClick}
          className="p-2 pl-5 pr-5 focus:outline-none  bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-gray-100 "
        >
          Add Task
        </button>
        <button
          onClick={onAddSubTaskClick}
          className="p-2 pl-5 pr-5 mx-2 bg-transparent border-2 border-gray-500 text-gray-500 text-lg rounded-lg hover:bg-gray-500 hover:text-gray-100 focus:outline-none"
        >
          Add Sub Task
        </button>
      </div>
    </nav>
  );
}
