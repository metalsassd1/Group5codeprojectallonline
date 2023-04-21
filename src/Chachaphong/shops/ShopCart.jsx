import React, { useState,useEffect } from "react"
import axios from "axios"
import addToCart from "../../Metha/function/addFunc"

const ShopCart = ({product}) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`https://64005a829f844910298eb65c.mockapi.io/products`)
=======
      .get(`http://localhost:3400/Product_582742010`)
>>>>>>> e2368a5e085965f814c389290e88fe06905689c7
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  {products.slice(0,20).map((product) =>{
    console.log(product.productName)  
  })}
  return (
    <>
      {products.slice(7,28).map((product, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                
                <img src={product.image_product} alt={product.image_product} onClick={() => addToCart(product)} />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{product.productName}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>{product.product_price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(product)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
