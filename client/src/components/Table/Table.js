import { useContext, useEffect } from "react";

import taskContext from "../../context/task/taskContext";

import TableRow from "./TableRow";

export default function Table({ setUpdateTaskOpen, setTask }) {
  const { tasks, fetchTasks } = useContext(taskContext);

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <div className="flex-1 min-w-0 my-3">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          Task List
        </h2>
      </div>
      <div className="flex flex-col mb-20">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Task
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="relative w-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Finish
                    </th>
                    <th scope="col" className="relative w-2 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative w-2 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tasks.map((task) => (
                    <TableRow
                      task={task}
                      key={task._id}
                      setUpdateTaskOpen={setUpdateTaskOpen}
                      setTask={setTask}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
