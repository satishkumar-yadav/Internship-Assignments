import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";

const priorities = ["High", "Medium", "Low"];

export default function TaskEditor({ onSave, onCancel, existingTask }) {
  const [title, setTitle] = useState(existingTask ? existingTask.title : "");
  const [priority, setPriority] = useState(existingTask ? existingTask.priority : "Medium");
  const [dueDate, setDueDate] = useState(existingTask ? existingTask.dueDate : "");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setPriority(existingTask.priority);
      setDueDate(existingTask.dueDate || "");
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      enqueueSnackbar("Title cannot be empty", { variant: "error" });
      return;
    }
    onSave({ title: title.trim(), priority, dueDate });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-white dark:bg-gray-800">
      <label className="block mb-2 font-semibold">
        Task Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100"
          autoFocus
        />
      </label>
      <label className="block mb-2 font-semibold">
        Priority
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100"
        >
          {priorities.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </label>
      <label className="block mb-4 font-semibold">
        Due Date
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-100"
        />
      </label>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
        >
          {existingTask ? "Update" : "Add"} Task
        </button>
      </div>
    </form>
  );
}
