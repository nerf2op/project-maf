import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './components/Cart'

function AddToCart() {
  const productList = useSelector((state)=> state.getProductData);
  const id = useSelector((state)=> state.getProductId);
  console.log("productList",productList);

  return (
     <>{
        
     }
     <Cart/>
    </>
  )
}

export default AddToCart