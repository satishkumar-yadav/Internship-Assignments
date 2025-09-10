import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
// import { v4 as uuidv4 } from "uuid";
 import { nanoid } from "@reduxjs/toolkit";
import './app.css';
import DarkModeToggle from "./components/DarkModeToggle";
import SearchBar from "./components/SearchBar";
import SortDropdown from "./components/SortDropdown";
import TaskEditor from "./components/TaskEditor";
import TaskList from "./components/TaskList";
import { addTask, setFilter, setSortBy } from "./features/tasksSlice";

export default function App() {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [isAdding, setIsAdding] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("priority");

  const handleAddTask = useCallback(
    ({ title, priority, dueDate }) => {
      const newTask = {
        id: nanoid(), //uuidv4(),
        title,
        priority,
        isCompleted: false,
        dueDate: dueDate || null,
        createdAt: new Date().toISOString(),
      };
      dispatch(addTask(newTask));
      enqueueSnackbar("Task added", { variant: "success" });
      setIsAdding(false);
    },
    [dispatch, enqueueSnackbar]
  );

  const handleSearchChange = useCallback(
    (value) => {
      setSearchTerm(value);
      dispatch(setFilter(value));
    },
    [dispatch]
  );

  const handleSortChange = useCallback(
    (value) => {
      setSortKey(value);
      dispatch(setSortBy(value));
    },
    [dispatch]
  );

  return ( //<body class="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100" >
    <div className="min-h-screen p-6 max-w-lg mx-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">To-Do App</h1>
        <DarkModeToggle />
      </header>

      <div className="mb-4 space-y-3">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <SortDropdown value={sortKey} onChange={handleSortChange} className="" />
      </div>

      {isAdding ? (
        <TaskEditor onSave={handleAddTask} onCancel={() => setIsAdding(false)} />
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="w-full py-2 mb-4 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          + Add New Task
        </button>
      )}

      <TaskList />
    </div>
  );
}
