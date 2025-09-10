import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";

const sortFields = [
  { label: "Price", value: "price" },
  { label: "Brand", value: "brand" },
  { label: "Rating", value: "rating" },
  { label: "Stock", value: "stock" },
];

const SortMenu = () => {
  const dispatch = useDispatch();

  const handleSort = e => {
    const [sortBy, order] = e.target.value.split(",");
    dispatch(fetchProducts({ sortBy, order }));
  };

  return (
    <select className="border p-2 rounded" onChange={handleSort} defaultValue="">
      <option value="" disabled>
        Sort By
      </option>
      {sortFields.map(f => (
        <React.Fragment key={f.value}>
          <option value={`${f.value},asc`}>{f.label} (Asc)</option>
          <option value={`${f.value},desc`}>{f.label} (Desc)</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default SortMenu;


//


const sortFields = [
  { label: "Price", value: "price" },
  { label: "Brand", value: "brand" },
  { label: "Rating", value: "rating" },
  { label: "Stock", value: "stock" },
];

const SortMenu = ({ setSortBy, setOrder }) => {
  const handleChange = e => {
    const [field, order] = e.target.value.split(",");
    setSortBy(field);
    setOrder(order);
  };

  return (
    <select className="border p-2 rounded" onChange={handleChange} defaultValue="">
      <option value="" disabled>
        Sort By
      </option>
      {sortFields.map(f => (
        <React.Fragment key={f.value}>
          <option value={`${f.value},asc`}>{f.label} (Asc)</option>
          <option value={`${f.value},desc`}>{f.label} (Desc)</option>
        </React.Fragment>
      ))}
    </select>
  );
};

export default SortMenu;
