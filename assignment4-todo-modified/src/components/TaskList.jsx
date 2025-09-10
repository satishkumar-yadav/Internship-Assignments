
import { useMemo } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const priorityOrder = {
  High: 1,
  Medium: 2,
  Low: 3,
};

export default function TaskList() {
  const { tasks, filter, sortBy } = useSelector((state) => state.tasks);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => task.title.toLowerCase().includes(filter.toLowerCase()));
  }, [tasks, filter]);

  const sortedTasks = useMemo(() => {
    if (sortBy === "priority") {
      return [...filteredTasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    } else if (sortBy === "dueDate") {
      return [...filteredTasks].sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
    } else if (sortBy === "createdAt") {
      return [...filteredTasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return filteredTasks;
  }, [filteredTasks, sortBy]);

  if (sortedTasks.length === 0)
    return <p className="text-center text-gray-500 dark:text-gray-400">No tasks found</p>;

  return (
    <div>
      {sortedTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
