import { SnackbarProvider } from "notistack";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App.jsx';
import './index.css';
import { store } from "./store/store.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <App />
      </SnackbarProvider>
    </Provider>
  </StrictMode>,
)






