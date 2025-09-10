import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";

//const CategoryFilter = () => { //
 const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {  
  const dispatch = useDispatch();
  const categories = useSelector(s => s.products.categories);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    dispatch(fetchProducts({ category: value }));
  };

  return (
    <>

    <select value={selectedCategory} onChange={handleChange} className="border p-2 rounded">
      <option value="">All Categories</option>
      {categories.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>

    {/* <div className="flex gap-2 flex-wrap mb-2">
      <button
        key="all"
        className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        onClick={() => dispatch(fetchProducts({}))}
      >
        All
      </button>

      {categories.map((c,i) => (
        // console.log(c),
        <button
          key={i}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
          onClick={() => dispatch(fetchProducts({ category: c }))}
        >
          {c.name}
        </button>
      ))}
    </div> */}

    </>
  );
};

export default CategoryFilter;

//////////


//   import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProducts } from "../store/productsSlice";

const CategoryFilter = ({ selectedCategory, setSelectedCategory, limit, sortBy, order }) => {
  const dispatch = useDispatch();
  const categories = useSelector(s => s.products.categories);

  const handleChange = e => {
    const value = e.target.value;
    setSelectedCategory(value);
    dispatch(fetchProducts({ category: value, limit, sortBy, order, skip: 0 }));
  };

  return (
    <select value={selectedCategory} onChange={handleChange} className="border p-2 rounded">
      <option value="">All Categories</option>
      {categories.map(c => (
        <option key={c} value={c}>{c}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;

