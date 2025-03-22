import React from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {
  return (
    <div className='product'>
      {/* Clicking the image navigates to product details and scrolls to the top */}
      <div className="product_img">
      <Link to={`/product/${props.id}`}>
        <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.item_name} />
        <div className="over_lay">
        {props.discount ? (
         <div className="dicount">
          {props.discount}%

         </div>
        ) : (
          <> </>
        )}
          
        <AiOutlineHeart />

        </div>
      </Link> 
        
      </div>
     

      <div className="product-info">
        <h2>{props.item_name}</h2>
        
        <div className='price-container'> 
           {/* Show discount if available */}
        {props.discount ? (
          <p> <s>${props.price}</s> - <span className="discounted-price">${props.price - props.discount}</span></p>
        ) : (
          <p> ${props.price}</p>
        )}
        {props.location} 
        </div>
        
       

        <p className='p' >
          <button><FaShoppingCart size={24}/></button> 

     
        <span>{props.rating}⭐</span>
        </p>
      </div>
    </div>
  );
}

export default Product;
