import { createSlice } from "@reduxjs/toolkit";

// Load wishlist from localStorage for the logged-in user
const getWishlist = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  return JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];
};
const setWishlist = wishlist => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishlist));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: getWishlist(),
  },
  reducers: {
    addToWishlist(state, action) {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        setWishlist(state.items);
      }
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter(id => id !== action.payload);
      setWishlist(state.items);
    },
    setWishlistState(state, action) {
      state.items = action.payload;
      setWishlist(state.items);
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlistState } = wishlistSlice.actions;
export default wishlistSlice.reducer;


////


const getWishlist = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  return JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];
};
const setWishlist = wishlist => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishlist));
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: getWishlist(),
  },
  reducers: {
    addToWishlist(state, action) {
      if (!state.items.includes(action.payload)) {
        state.items.push(action.payload);
        setWishlist(state.items);
      }
    },
    removeFromWishlist(state, action) {
      state.items = state.items.filter(id => id !== action.payload);
      setWishlist(state.items);
    },
    setWishlistState(state, action) {
      state.items = action.payload;
      setWishlist(state.items);
    },
  }
});

export const { addToWishlist, removeFromWishlist, setWishlistState } = wishlistSlice.actions;
export default wishlistSlice.reducer;
