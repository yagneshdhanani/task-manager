import React, { useState } from "react";
import UpdateTaskModal from "./Modal/UpdateTaskModal";
import Table from "./Table/Table";

export default function Home() {
  const [updateTaskOpen, setUpdateTaskOpen] = useState(false);
  const [task, setTask] = useState({});
  return (
    <>
      <UpdateTaskModal
        updateTaskOpen={updateTaskOpen}
        setUpdateTaskOpen={setUpdateTaskOpen}
        task={task}
        setTask={setTask}
      />
      <div className="container mx-auto overflow-hidden">
        <Table setUpdateTaskOpen={setUpdateTaskOpen} setTask={setTask} />
      </div>
    </>
  );
}
