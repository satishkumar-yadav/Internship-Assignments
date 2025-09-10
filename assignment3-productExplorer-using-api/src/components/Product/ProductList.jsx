//import ProductItem from "./ProductItem";


import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";
import Pagination from "../Pagination";
import SearchBar from "../Searchbar/SearchBar";
import CategoryFilter from "./CategoryFilter";
import ProductItem from "./ProductItem";
import SortMenu from "./SortMemu";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(s => s.products);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(fetchProducts({ limit: 10, skip: 0 }));
  }, [dispatch]);

  useEffect(() => {
    if (error) enqueueSnackbar(error, { variant: "error" });
  }, [error, enqueueSnackbar]);

  return (
    <div>
      <SearchBar />
      <CategoryFilter />
      <SortMenu />
      {status === "loading" && (
        <div className="text-center py-4 text-xl animate-pulse">Loading...</div>
      )}
      {status === "failed" && (
        <div className="text-center py-4 text-red-500">Error loading products!</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {items.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination limit={10} />
    </div>
  );
};

export default ProductList;

//

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts } from "../store/productsSlice";
// import ProductItem from "./ProductItem";
// import SearchBar from "./SearchBar";
// import CategoryFilter from "./CategoryFilter";
// import SortMenu from "./SortMenu";
// import Pagination from "./Pagination";
// import PageSizeDropdown from "./PageSizeDropdown";
// import { useSnackbar } from "notistack";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, status, error, total } = useSelector(s => s.products);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(fetchProducts({
      category: selectedCategory,
      sortBy,
      order,
      limit: pageSize,
      skip: pageSize * (page - 1),
    }));
  }, [dispatch, selectedCategory, sortBy, order, pageSize, page]);

  useEffect(() => {
    if (error) enqueueSnackbar(error, { variant: "error" });
  }, [error, enqueueSnackbar]);

  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <SearchBar />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          limit={pageSize}
          sortBy={sortBy}
          order={order}
        />
        <SortMenu setSortBy={setSortBy} setOrder={setOrder} />
        <PageSizeDropdown pageSize={pageSize} setPageSize={setPageSize} />
      </div>
      {status === "loading" && (
        <div className="text-center py-4 text-xl animate-pulse">Loading...</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
        {items.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        setPage={setPage}
        pageSize={pageSize}
        total={total}
      />
    </div>
  );
};

export default ProductList;


////////////////////////////////////////

// function ProductList({products, message}) {

//   let Pitems = products.map((products,index)=>{
//     return(
//           <ProductItem key ={index} products={products} />
//     )
//   })

//   return (
//      <div className="grid grid-cols-3 gap-4">

//           {products.length>=1 
//             ? Pitems
//             : message
                         
//              } 
                          
//       </div>
//   )
// }
 
