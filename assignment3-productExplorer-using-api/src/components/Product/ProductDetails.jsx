import axios from "axios";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(res => setDetails(res.data))
      .catch(err => {
        enqueueSnackbar("Failed to load product details", { variant: "error" });
      })
      .finally(() => setLoading(false));
  }, [id, enqueueSnackbar]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (!details) return <div className="text-center py-4 text-red-500">Product not found!</div>;

  return (
    <section className="bg-white dark:bg-gray-800 rounded shadow p-6 flex flex-col md:flex-row gap-6">
      <img src={details.thumbnail} alt={details.title} className="w-64 h-64 object-contain rounded shadow" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{details.title}</h2>
        <p className="mb-2">{details.description}</p>
        <p className="font-semibold">Brand: {details.brand}</p>
        <p>Category: {details.category}</p>
        <p>
          Price: <span className="text-green-600 font-bold">₹{details.price}</span>
        </p>
        <p>Discount: {details.discountPercentage}%</p>
        <p>Rating: {details.rating}</p>
        <p>Stock: {details.stock}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductDetails;
