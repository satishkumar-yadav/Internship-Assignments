export default function SortDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-500"
      aria-label="Sort tasks"
    >
      <option value="priority">Sort by Priority</option>
      <option value="dueDate">Sort by Due Date</option>
      <option value="createdAt">Sort by Created Date</option>
    </select>
  );
}