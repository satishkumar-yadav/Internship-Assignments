import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../features/cartSlice";
import productsReducer from '../features/productsSlice';
import userReducer from '../features/userSlice';
import wishlistReducer from '../features/wishlistSlice';

//export default configureStore({
const store = configureStore({
    reducer: {
        products : productsReducer,
        user: userReducer,
        wishlist: wishlistReducer,
        cart: cartReducer,
    }
});


export default store; 


  
