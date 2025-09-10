
const PageSizeDropdown = ({ pageSize, setPageSize }) => (
  <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))} className="border p-2 rounded ml-2">
    {[10, 20, 30].map(size => <option key={size} value={size}>{size}</option>)}
  </select>
);

export default PageSizeDropdown;
