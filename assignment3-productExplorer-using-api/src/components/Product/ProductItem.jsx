
import { useNavigate } from "react-router-dom";
import WishlistButton from "../Button/WishlistButton";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col hover:shadow-lg transition group">
      <WishlistButton productId={product.id} />
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="cursor-pointer"
      >
        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
        <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <p>₹{product.price} <span className="text-green-500">{product.discountPercentage}% off</span></p>
          <p className="text-yellow-500">★ {product.rating}</p>
        </div>
        <button
          className="bg-blue-600 text-white rounded-full px-3 py-2 hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;


///////////////////////////////////////////

// function ProductItem({products}){
//  // console.log(products);

//   return(
//     <>
//         {/* <div className="shadow-lg text-center pb-4">
//              <img className='w-[100%] h-[220px]' src={products.thumbnail} />
//             <h4>{products.title}</h4>
//             <b>Rs {products.price}</b>
//         </div>  */} 

//       <div className="shadow-lg text-center pb-4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

//             <Link to={`https://dummyjson.com/products/${products.id}`} >
//                 <img className="p-8 rounded-t-lg" src={products.thumbnail} alt="product_image1" />
//             </Link>

//             <div className="px-5 pb-5">
//                <Link to={`https://dummyjson.com/products/${products.id}`} >
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//                         {products.title}
//                     </h5>
//                 </Link>

//                 <div className="flex items-center mt-2.5 mb-5">
//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>

//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="false"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>

//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>

//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>

//                     <svg
//                         className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>

//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                         4.0
//                     </span>
//                 </div>

//                 <div className="flex items-center justify-between">
//                     <span className="text-3xl font-bold text-gray-900 dark:text-white">Rs <span className="line-through">{products.price + 500} </span> {products.price} {products.discountPercentage}%off </span>
//                     <a
//                         href="/"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                         Add to cart
//                     </a>
//                 </div>

//             </div>

//         </div>

//     </>

//   ) 
// }
