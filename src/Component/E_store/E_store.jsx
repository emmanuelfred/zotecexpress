import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './E_store.css'
import Product from '../Product/Product'
import all_product from '../Assets/items/all_product';
const e_store_items = all_product
.filter(item => item.category === "e_store") // Filter by restaurant category
.sort((a, b) => b.order_count - a.order_count) // Sort by highest order count
.slice(0, 6); // Take the top 4
const categories = [
    "Fashion", "Fashion", "Fashion", "Fashion",
    "Fashion", "Fashion", "Fashion", "Fashion", "Fashion"
  ];
function E_store() {
    const [slideIndex, setSlideIndex] = useState(0);
  const itemsPerPage = 4; // Number of items visible at a time

  // Handle Next Slide
  const nextSlide = () => {
    if (slideIndex < categories.length - itemsPerPage) {
      setSlideIndex(slideIndex + 1);
    }
  };

  // Handle Previous Slide
  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className='e_store container'>
         <div className="slider-container">
            <button className="prev-btn" onClick={prevSlide} disabled={slideIndex === 0}>❮</button>
            <div className="slider-wrapper">
                <ul className="slider-list " style={{ transform: `translateX(-${slideIndex * 120}px)` }}>
                {categories.map((category, index) => (
                    <li key={index} className="slider-item">
                    <Link to="#">{category}</Link>
                    </li>
                ))}
                </ul>
            </div>
            <button className="next-btn" onClick={nextSlide} disabled={slideIndex >= categories.length - itemsPerPage}>❯</button>
            </div>
        <div className="product-contanter">
            
            <div className="Product-wrapper col-lg-9-col-md-8">
               {
                e_store_items.map((item,i)=>{
                    return <Product key={i} item_name={item.name} image={item.image} category ={item.category}
                    vendor = {item.vendor} price = {item.price} discount = {item.discount} location = {item.location}
                    rating ={item.rating} description_pic = {item.description_pic} delievery_time = {item.delievery_time}/>
                })
               }
            </div>
            <div className="aside col-lg-3 col-md-4">
            <button class="category-btn">Most popular near you</button>
            <Link className='category-btn'>see more</Link>

            </div>
        </div>


    </div>
  )
}

export default E_store