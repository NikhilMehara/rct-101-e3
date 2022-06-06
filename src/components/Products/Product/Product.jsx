import React, {useState,useEffect} from "react";
// import {axios} from "axios";

const Product = () => {
  // Note: this id should come from api

  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  const [count,setCount] = useState(1)

  const getProduct = ()=>{
    fetch(" http://localhost:8080/products").then((r)=>r.json()).then(d=>setProducts(d));
    }

  const cartData = () =>{
    fetch("http://localhost:8080/cartItems").then((r)=>r.json()).then(d=>setCart(d));
  }  
     
    useEffect(() => {
      getProduct();
      cartData();
    }, [])

  
console.log(products);
  // const product = { id: 1 };

  return (
    <div>
      {products.map((p)=>{
        return(
           <div key={p.id} data-cy={`product-${p.id}`}>
           <h3 data-cy="product-name">{p.name}</h3>
           <h6 data-cy="product-description">{p.description}</h6>
            <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
           <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setCount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">remove</button>
      </div>
    </div>
    )})}
    </div>
  );
};

export default Product;
