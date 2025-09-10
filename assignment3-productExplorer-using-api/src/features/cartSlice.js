import { createSlice } from "@reduxjs/toolkit";

const getCart = () => JSON.parse(localStorage.getItem("cart")) || [];

const setCart = cart => localStorage.setItem("cart", JSON.stringify(cart));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCart(), // [{id, quantity}]
  },
  reducers: {
    addToCart(state, action) {
      const { id } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ id, quantity: 1 });
      }
      setCart(state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      setCart(state.items);
    },
    updateCartQty(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
        setCart(state.items);
      }
    }
  }
});

export const { addToCart, removeFromCart, updateCartQty } = cartSlice.actions;
export default cartSlice.reducer;
