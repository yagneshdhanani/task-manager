import React, { useContext } from "react";
import taskContext from "../../context/task/taskContext";

export default function TableRow({ task, setUpdateTaskOpen, setTask }) {
  const { updateTask, deleteTask } = useContext(taskContext);

  const handleUpdateClick = () => {
    setUpdateTaskOpen(true);
    setTask(task);
  };

  const handleComplete = () => {
    updateTask(task._id, "", "", "", "", !task.isCompleted);
  };

  const handleDelete = () => {
    deleteTask(task._id);
  };

  const textcolor = task.isCompleted ? "text-green-600" : "text-gray-900";

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="ml">
            <div className={`text-sm font-medium ${textcolor}`}>
              {task.description}
            </div>
            <div className={`text-sm mx-3 ${textcolor}`}>{task.subTask}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className={`text-sm ${textcolor}`}>{task.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className={`text-sm ${textcolor}`}>{task.date.slice(0, 10)}</div>
      </td>
      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {task.role}
      </td> */}
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <i
          onClick={handleComplete}
          className={`fas fa-check${task.isCompleted ? "-double" : ""}`}
        ></i>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <i className="fas fa-edit" onClick={handleUpdateClick}></i>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <i onClick={handleDelete} className="fas fa-trash-alt"></i>
      </td>
    </tr>
  );
}
