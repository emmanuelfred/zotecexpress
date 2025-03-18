import React from 'react'
import './Local_store.css'
import Product from '../Product/Product'
import all_product from '../Assets/items/all_product';
import { Link } from 'react-router-dom';
const local_store_items = all_product
.filter(item => item.category === "local_store") // Filter by restaurant category
.sort((a, b) => b.order_count - a.order_count) // Sort by highest order count
.slice(0, 6); // Take the top 4

function Local_store() {
  return (
    <div className='Local_store container'>
        <div className="header">
            <h3>Get your order in <span>40mins</span></h3>

        </div>
        <div className=" product-contanter ">
            <div className="aside col-lg-3 col-md-4">
            <button class="category-btn">Order your cravings</button>
            <Link className='category-btn'>see more</Link>

            </div>
            <div className="Product-wrapper col-lg-9-col-md-8">
               {
                local_store_items.map((item,i)=>{
                    return <Product key={i} item_name={item.name} image={item.image} category ={item.category}
                    vendor = {item.vendor} price = {item.price} discount = {item.discount} location = {item.location}
                    rating ={item.rating} description_pic = {item.description_pic} delievery_time = {item.delievery_time}/>
                })
               }
            </div>
        </div>
    </div>
  )
}

export default Local_store