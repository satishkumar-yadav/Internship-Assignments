import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productsSlice";

const Pagination = ({ limit = 10 }) => {
  const dispatch = useDispatch();
  const total = useSelector(s => s.products.total);
  const [page, setPage] = React.useState(1);

  const totalPages = Math.ceil(total / limit);

  const handlePageChange = newPage => {
    setPage(newPage);
    dispatch(fetchProducts({ limit, skip: limit * (newPage - 1) }));
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 items-center mt-3">
      <button
        className="px-3 py-1 rounded bg-gray-200"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Prev
      </button>
      <span>
        Page {page}/{totalPages}
      </span>
      <button
        className="px-3 py-1 rounded bg-gray-200"
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

///


const Pagination = ({ currentPage, setPage, pageSize, total }) => {
  const totalPages = Math.ceil(total / pageSize) || 1;

  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 items-center mt-3">
      <button
        className="px-3 py-1 rounded bg-gray-200"
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        Prev
      </button>
      <span>
        Page {currentPage}/{totalPages}
      </span>
      <button
        className="px-3 py-1 rounded bg-gray-200"
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;



////////////////////////

// function Pagination({ page, total, limit, onPage }) {

//   if (!limit || total <= limit) return null;

//   const pages = Math.ceil(total / limit);
  
//   return (
//     <div className="flex gap-2 my-4 justify-center">
//       {Array.from({length: pages}, (_,i) => 
//         <button
//           key={i+1}
//           className={`px-3 py-1 rounded ${page === (i+1) ? 'bg-blue-700 text-white font-bold' : 'bg-gray-200'}`}
//           onClick={() => onPage(i+1)}
//         >{i+1}</button>
//       )}
//     </div>
//   );
// }


