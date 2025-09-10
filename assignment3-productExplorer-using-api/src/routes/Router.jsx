import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import "../app.css";
import AuthToggle from "../components/Authentication/AuthToggle";
import LoginForm from "../components/Authentication/LoginForm";
import RegisterForm from "../components/Authentication/RegisterForm";
import FloatingUpButton from "../components/Button/FloatingUpButton";
import ProductDetails from "../components/Product/ProductDetails";
import ProductList from "../components/Product/ProductList";
import { fetchCategories } from "../features/productsSlice";
// import About from "../components/About/About";
// import Layout from "../components/Layout";
// import FavProduct from "../components/Product/FavProduct";
// import ProductHome from "../pages/ProductHome";
// //import ComingSoon from "../pages/CommingSoon";

const Router = () => {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector(s => s.user);
 
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
     
      <BrowserRouter>
        <header className="p-4 bg-white dark:bg-gray-800 shadow flex justify-between items-center">
          <h1 className="font-bold text-xl">Product Explorer</h1>
          <AuthToggle />
        </header>

        <main className="p-4 max-w-6xl mx-auto">
          <Routes>
            {/* <Route path="/" element={<Layout />}> */}
             {/* <Route index element={<ProductHome />} /> */}
             
             <Route path="/" element={<ProductList />} />

             <Route path="/product/:id" element={<ProductDetails />} />
             <Route path="/login" element={<LoginForm />} />
             <Route path="/register" element={<RegisterForm />} />

              {/* <Route path="liked-items" element={<FavProduct />} /> */}
              {/* <Route path="about" element={<About />} /> */}

             {/* <Route path="/default" element={<ComingSoon />} /> */}
             <Route path="*" element={<div>404 – Page Not Found</div>} />

              {/* </Route> */}
          </Routes>
        </main>

        <FloatingUpButton />
      </BrowserRouter>
    </div>
  );
};

export default Router;


/////

// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { fetchCategories } from "./store/productsSlice";
// import Header from "./components/Header";
// import FloatingUpButton from "./components/FloatingUpButton";
// import ProductList from "./components/ProductList";
// import ProductDetails from "./components/ProductDetails";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
// import WishlistModal from "./components/WishlistModal";
// import CartModal from "./components/CartModal";

const App = () => {
  const dispatch = useDispatch();
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header
        onWishlistClick={() => setWishlistOpen(true)}
        onCartClick={() => setCartOpen(true)}
      />
      <main className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        {wishlistOpen && <WishlistModal onClose={() => setWishlistOpen(false)} />}
        {cartOpen && <CartModal onClose={() => setCartOpen(false)} />}
      </main>
      <FloatingUpButton />
    </BrowserRouter>
  );
};

export default App;

