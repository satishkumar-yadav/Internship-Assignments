
export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-500"
      aria-label="Search tasks"
    />
  );
}
