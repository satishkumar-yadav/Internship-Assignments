import api from './api';
 
/*
 const baseURL = "https://dummyjson.com";
*/
export const searchProducts = (query=phone) =>
  api.get(`/products/search?q=${query}`).then(res => res.data);

export const fetchAllProducts = (limit=10, skip=10) =>
  api.get(`/products?limit=${limit}&skip=${skip}`).then(res => res.data);

export const fetchSingleProduct = (id) =>
  api.get(`/products/${id}`).then(res => res.data).catch(() => null);

export const fetchAllCategories = () =>
  api.get(`/products/category-list`).then(res => res.data);

export const fetchProductCategories = () =>
  api.get(`/products/categories`).then(res => res.data).catch(() => null);

export const fetchProductByCategory = (category=laptops) =>
  api.get(`/products/category/${category}`).then(res => res.data);

export const sortProducts = (sortBy=title, order=asc) =>
  api.get(`/products?${sortBy}&${order}`).then(res => res.data).catch(() => null);


//  export const fetchProducts = (page=1, limit=9) =>
//   api.get(`/products?page=${page}&limit=${limit}`).then(res => res.data);


 // https://dummyjson.com/products/{products.id}