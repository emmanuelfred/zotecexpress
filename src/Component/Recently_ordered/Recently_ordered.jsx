import React, { useState } from 'react';
import './Recently_ordered.css';
import { Link } from 'react-router-dom';
import all_product from '../Assets/items/all_product';

function Recently_ordered() {
  // State to store the selected item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click
  const viewItem = (item) => {
    setSelectedItem(item); // Set the clicked item as selected
  };

  // Get the top 4 most ordered restaurant items
  const topOrderedFoods = all_product
    .filter(item => item.category === "restaurant") // Filter by restaurant category
    .sort((a, b) => b.order_count - a.order_count) // Sort by highest order count
    .slice(0, 4); // Take the top 4

  return (
    <div className='container'>
      <div className="resturantlist-header">
        <h1>4 Most Ordered Food</h1>
        <Link to="/restaurants">View all ratings</Link>
      </div>

      <div className="most-ordered">
        {topOrderedFoods.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt={item.name} className="item-img" />
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.vendor}, {item.location}</p>
              <button onClick={() => viewItem(item)}>View Item</button> {/* Pass item */}
            </div>
          </div>
        ))}
      </div>

      {/* Conditionally render the selected item */}
      {selectedItem && (
        <div className="item-details-container">
            <div className="item-details">
            
            <img src={selectedItem.image} alt={selectedItem.name} className="item-detail-img" />
            <h2>{selectedItem.name}</h2>
            <p><strong>Vendor:</strong> {selectedItem.vendor}</p>
            <p><strong>Location:</strong> {selectedItem.location}</p>
            <p><strong>Orders:</strong> {selectedItem.order_count}</p>
            <p><strong>Price:</strong> ${selectedItem.price}</p>
            <button onClick={() => setSelectedItem(null)}>Close</button> {/* Close details */}

            </div>
          
        </div>
      )}
    </div>
  );
}

export default Recently_ordered;
