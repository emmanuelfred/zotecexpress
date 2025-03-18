import React, { useState } from "react";
import {  FaTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom'
import './CartDropdown.css'

const CartDropdown = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", price: 5.99, quantity: 2 },
    { id: 2, name: "Laptop Bag", price: 49.99, quantity: 1 },
    { id: 3, name: "Salt Pack", price: 2.50, quantity: 3 },
  ]);

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="dropdown">
      {/* Cart Icon */}
      <Link data-bs-toggle="dropdown"aria-expanded="false">
       
        <FiShoppingCart size={27} />
        {cartItems.length > 0 && (
          <span >
            {cartItems.length}
          </span>
        )}
      </Link>

      {/* Dropdown Menu */}
      <ul className="dropdown-menu dropdown-menu-end p-2 shadow" style={{ width: "300px" }}>
        <li><h6 className="dropdown-header">Cart Items</h6></li>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li key={item.id} className="dropdown-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.name}</strong> <br />
                <small className="text-muted">${item.price} × {item.quantity}</small>
              </div>
              <button className="btn btn-sm delete_icon" onClick={() => removeItem(item.id)}>
                <FaTrashAlt size={14} />
              </button>
            </li>
          ))
        ) : (
          <li className="dropdown-item text-muted">Your cart is empty</li>
        )}

        {cartItems.length > 0 && (
          <li className="dropdown-item text-center checkout">
            <Link className="btn ">Checkout</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CartDropdown;
