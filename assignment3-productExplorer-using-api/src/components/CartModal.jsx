import axios from "axios";
import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateCartQty } from "../store/cartSlice";

const CartModal = ({ onClose }) => {
  const cart = useSelector(s => s.cart.items);
  const [products, setProducts] = React.useState([]);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (cart.length === 0) setProducts([]);
    else Promise.all(
      cart.map(({ id }) => axios.get(`https://dummyjson.com/products/${id}`).then(res => res.data))
    ).then(setProducts);
  }, [cart]);

  const handleRemove = id => {
    dispatch(removeFromCart(id));
    enqueueSnackbar("Removed from cart", { variant: "info" });
  };

  const handleQtyChange = (id, qty) => {
    dispatch(updateCartQty({ id, quantity: qty }));
    enqueueSnackbar("Cart updated", { variant: "success" });
  };

  const getQty = id => cart.find(i => i.id === id)?.quantity || 1;

  return (
    <div className="fixed top-0 right-0 bottom-0 w-96 bg-white dark:bg-gray-900 shadow-lg z-50 p-4 overflow-auto">
      <button className="absolute top-2 right-4" onClick={onClose}>Close</button>
      <h2 className="font-bold text-lg mb-4">My Cart</h2>
      <ul>
        {products.map(p => (
          <li key={p.id} className="flex items-center gap-2 border-b p-2">
            <img src={p.thumbnail} className="w-12 h-12" alt={p.title} />
            <span className="cursor-pointer font-semibold" onClick={() => { onClose(); navigate(`/product/${p.id}`); }}>
              {p.title}
            </span>
            <input
              type="number"
              min={1}
              value={getQty(p.id)}
              onChange={e => handleQtyChange(p.id, Number(e.target.value))}
              className="border w-12 mx-2"
            />
            <button onClick={() => handleRemove(p.id)}>🛒</button>
          </li>
        ))}
        {products.length === 0 && <p className="text-gray-500 py-6 text-center">Cart is empty</p>}
      </ul>
      {/* Implement 'buy' logic as needed */}
    </div>
  );
};

export default CartModal;
