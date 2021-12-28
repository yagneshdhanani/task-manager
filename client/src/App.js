import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import AddSubTaskModal from "./components/Modal/AddSubTaskModal";
import AddTaskModal from "./components/Modal/AddTaskModal";

import TaskState from "./context/task/TaskState";
import Home from "./components/Home";

function App() {
  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [addSubTaskOpen, setAddSubTaskOpen] = useState(false);

  const onAddTaskClick = () => {
    setAddTaskOpen(true);
  };

  const onAddSubTaskClick = () => {
    setAddSubTaskOpen(true);
  };

  return (
    <>
      <TaskState>
        <Navbar
          onAddTaskClick={onAddTaskClick}
          onAddSubTaskClick={onAddSubTaskClick}
        />
        <AddTaskModal
          addTaskOpen={addTaskOpen}
          setAddTaskOpen={setAddTaskOpen}
        />
        <AddSubTaskModal
          addSubTaskOpen={addSubTaskOpen}
          setAddSubTaskOpen={setAddSubTaskOpen}
        />
        <Home />
      </TaskState>
    </>
  );
}

export default App;
