import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category, search, sortBy, order, limit, skip }, { rejectWithValue }) => {
    let url = API;

    if (category) url = `${API}/category/${category}`;
    else if (search) url = `${API}/search?q=${search}`;
    else if (sortBy) url = `${API}?sortBy=${sortBy}&order=${order || 'asc'}`;
    else if (limit != null && skip != null) url = `${API}?limit=${limit}&skip=${skip}`;

    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/categories`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  items: [],
  categories: [],
  status: "idle",
  error: null,
  total: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products || [];
        state.total = action.payload.total || 0;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default productsSlice.reducer;


///


const API = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category, search, sortBy, order, limit, skip }, { rejectWithValue }) => {
    let url = API;
    if (category) url = `${API}/category/${category}`;
    else if (search) url = `${API}/search?q=${search}`;
    else url = `${API}?limit=${limit}&skip=${skip}&sortBy=${sortBy || ''}&order=${order || ''}`;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/categories`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  items: [],
  categories: [],
  status: "idle",
  error: null,
  total: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.products || [];
        state.total = action.payload.total || 0;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default productsSlice.reducer;
