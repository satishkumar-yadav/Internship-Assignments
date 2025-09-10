import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "todo_tasks";

const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serialized === null) return [];
    return JSON.parse(serialized);
  } catch (e) {
    console.log(e)
    return [];
  }
};

const saveToLocalStorage = (tasks) => {
  try {
    const serialized = JSON.stringify(tasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, serialized);
  } catch (e) {
    console.log(e)
  }
};

const initialState = {
  tasks: loadFromLocalStorage(),
  filter: "",
  sortBy: "priority", // or 'dueDate' or 'createdAt'
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
      saveToLocalStorage(state.tasks);
    },
    updateTask(state, action) {
      const { id, updates } = action.payload;
      const index = state.tasks.findIndex((t) => t.id === id);
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...updates };
        saveToLocalStorage(state.tasks);
      }
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      saveToLocalStorage(state.tasks);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { addTask, updateTask, deleteTask, setFilter, setSortBy } = tasksSlice.actions;

export default tasksSlice.reducer;
