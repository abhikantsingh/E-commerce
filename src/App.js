import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products/product'
import Navbar from './components/Navbar/Navbar';
import {commerce} from './lib/ecomm';
const App = () =>
{
  const [products,setProducts]= useState([]);
   const [cart,setcart]=useState({});
  const fetchProduct = async () =>{
    const {data} = await commerce.products.list();

    setProducts(data);
  }
   const fetchCart = async
  useEffect(() =>
  {
    fetchProduct();
  },[]);
  
  return(
    <>
    <div>
    <Navbar></Navbar>
  <Products products={products}></Products>
    </div>
    
  </>
  );
};

export default App;
