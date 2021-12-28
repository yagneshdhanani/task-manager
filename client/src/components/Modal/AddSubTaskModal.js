import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

import taskContext from "../../context/task/taskContext";
import DropDown from "./DropDown";

export default function AddSubTaskModal({ addSubTaskOpen, setAddSubTaskOpen }) {
  const cancelButtonRef = useRef(null);
  const { tasks, addSubTask } = useContext(taskContext);

  const [task, setTask] = useState({
    description: "",
    subTask: "",
    _id: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    addSubTask(task._id, task.subTask);
    setTask({ description: "", subTask: "", _id: "" });
    setAddSubTaskOpen(false);
  };

  const handleCancel = () => {
    setTask({ description: "", subTask: "", _id: "" });
    setAddSubTaskOpen(false);
  };

  return (
    <Transition.Root show={addSubTaskOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setAddSubTaskOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="text-center">
                <h1 className="my-3 text-3xl font-semibold text-black ">
                  Add Sub Task
                </h1>
              </div>
              <div className="m-7">
                <form id="form" onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <DropDown tasks={tasks} setTask={setTask} task={task} />
                  </div>
                  <div className="mb-6 hidden">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Task
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      required
                      value={task.description}
                      className="w-full px-3 py-2 placeholder-white-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Task
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Select task to add sub task"
                      required
                      disabled
                      value={task.description}
                      className="w-full px-3 py-2 placeholder-white-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="subTask"
                      className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      Sub Task
                    </label>
                    <input
                      type="text"
                      name="subTask"
                      id="subTask"
                      placeholder="Enter detail here"
                      required
                      value={task.subTask}
                      onChange={handleChange}
                      className="w-full px-3 py-2 placeholder-white-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    />
                  </div>

                  <div className="mb-6">
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleCancel}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Add Sub Task
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
