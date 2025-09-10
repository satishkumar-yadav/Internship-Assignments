import { createSlice } from "@reduxjs/toolkit";

// Utils for LocalStorage
const getUser = () => JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: getUser(),
  loggedIn: !!getUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.loggedIn = false;
    },
    register(state, action) {
      state.user = action.payload;
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;

///


const getUser = () => JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: getUser(), // {username, email, password}
  loggedIn: !!getUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.loggedIn = false;
    },
    register(state, action) {
      state.user = action.payload;
      state.loggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  }
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;
