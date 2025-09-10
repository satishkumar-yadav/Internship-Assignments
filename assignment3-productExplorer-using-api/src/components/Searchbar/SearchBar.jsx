// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// import { faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


    //  <Header info={headerInfo} cname="sky" >
    //         <h1>Children Props</h1> 
    //     </Header>

    //     <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
    //     <FontAwesomeIcon icon={faPhone} className='text-danger'/>
    //     <FontAwesomeIcon icon={faSearch} />


/////////////////

import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../features/productsSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (query.length > 0) {
      // fetch products for suggestions
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(res => res.json())
        .then(data => setSuggestions(data.products || []))
        .catch(e => enqueueSnackbar("Failed to fetch suggestions", { variant: "error" }));
    } else {
      setSuggestions([]);
    }
  }, [query, enqueueSnackbar]);

  const handleSearch = e => {
    e.preventDefault();
    dispatch(fetchProducts({ search: query }));
  };

  return (
    <div className="mb-2 w-full flex flex-col">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products by name, brand or category"
        />
        <button className="bg-blue-600 text-white rounded px-4 py-2" type="submit">
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="bg-white shadow rounded mt-1">
          {suggestions.map(s => (
            <li
              key={s.id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(s.title);
                dispatch(fetchProducts({ search: s.title }));
                setSuggestions([]);
              }}
            >
              {s.title} ({s.brand}) [{s.category}]
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
