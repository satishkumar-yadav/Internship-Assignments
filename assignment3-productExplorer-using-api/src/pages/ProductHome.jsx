import { useEffect, useState } from 'react';
import { fetchAllCategories, fetchAllProducts, fetchProductByCategory } from '../axios/endpoints';
import Pagination from '../components/Pagination';
import CategoryList from '../components/Product/CategoryList';
import FavProduct from '../components/Product/FavProduct';
import ProductList from '../components/Product/ProductList';

function ProductHome() {

  let [category,setCategory] = useState([])
  let [products,setProducts] = useState([])
  let [catName,setCatName] = useState("")
  let [wishlist,setWishlist] = useState([])
  let [total, setTotal] = useState(0);
  let [limit, setLimit] = useState(10);
  let [page, setPage] = useState(1);
   let skip = 0;

  let getCategory = ()=>{
    fetchAllCategories()
     .then((data)=>{
      //console.log("category :", data)
      setCategory(data)
    })
   
  }

  let getProducts = ()=>{

    fetchAllProducts(limit, skip )
    .then((Pro)=>{
      // console.log(Pro)  // limit, skip, total
       //console.log(Pro.products[0])
       setTotal(Pro.total);
       //console.log(total);
       setProducts(Pro.products)
    })
  }

  useEffect(()=>{
       getCategory();
       getProducts();
  },[])

  useEffect(()=>{
    if(catName!==""){
     // console.log(catName)

     fetchProductByCategory(catName)
     .then((cat)=>{
      //console.log(cat)
      setTotal(cat.total);
      setProducts(cat.products)
     })
    }
  },[catName])

  

  return (
     <div className="py-[40px]">

         <div className='max-w-[1320px] mx-auto'> 

            <h1 className="text-center text-[40px] font-bold mb-[30px]">Our Products</h1>
               <div className="grid grid-cols-[30%_auto] gap-[20px]">

                  <div className="">

                        <CategoryList finalCategory={category} setCategory={setCatName}/>
                  </div>

                  <div>
                      <ProductList products={products} message="No Products Found."/>
                  </div>
 
                  <div>
                      <FavProduct products={wishlist} />
                  </div>

                       <Pagination page={page} total={total} limit={limit} onPage={setPage} />
               </div>
          
          </div>
     </div>
  )
}

export default ProductHome







 

