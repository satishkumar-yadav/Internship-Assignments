import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/tasksSlice";
import TaskEditor from "./TaskEditor";

const priorityColors = {
  High: "text-red-600",
  Medium: "text-yellow-600",
  Low: "text-green-600",
};

export default function TaskItem({ task }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isEditing, setIsEditing] = useState(false);

  const toggleComplete = useCallback(() => {
    dispatch(updateTask({ id: task.id, updates: { isCompleted: !task.isCompleted } }));
    enqueueSnackbar(task.isCompleted ? "Marked as Incomplete" : "Marked as Complete", {
      variant: "success",
    });
  }, [dispatch, task, enqueueSnackbar]);

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(task.id));
    enqueueSnackbar("Deleted task", { variant: "warning" });
  }, [dispatch, task.id, enqueueSnackbar]);

  const handleSave = (updates) => {
    dispatch(updateTask({ id: task.id, updates }));
    setIsEditing(false);
    enqueueSnackbar("Updated task", { variant: "success" });
  };

  if (isEditing)
    return <TaskEditor onSave={handleSave} onCancel={() => setIsEditing(false)} existingTask={task} />;

  const dueDateObj = task.dueDate ? new Date(task.dueDate) : null;
  const isOverdue = dueDateObj && !task.isCompleted && dueDateObj < new Date();

  return (
    <div
      className={`flex items-center justify-between p-3 mb-2 border rounded shadow-sm bg-white dark:bg-gray-800 ${
        isOverdue ? "border-red-500" : "border-gray-300"
      }`}
    >
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={toggleComplete}
          aria-label={`Mark task ${task.title} as complete`}
        />
        <div>
          <p
            className={`font-medium ${
              task.isCompleted ? "line-through text-gray-500 dark:text-gray-400" : ""
            }`}
          >
            {task.title}
          </p>
          <p className={`text-sm ${priorityColors[task.priority]} font-semibold`}>
            Priority: {task.priority}
          </p>
          {task.dueDate && (
            <p className={`text-sm ${isOverdue ? "text-red-600" : "text-gray-600"}`}>
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(true)}
          className="text-indigo-600 hover:text-indigo-900"
          aria-label={`Edit task ${task.title}`}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-900"
          aria-label={`Delete task ${task.title}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
