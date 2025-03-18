import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePicture from '../Assets/p1_product_i1.png';
import './ResturantList.css';
import { RiMapPin2Fill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";







// Dummy restaurant list
const restaurants = [
  { id: 1, name: "Chicken Republic", image: profilePicture },
  { id: 2, name: "Domino’s Pizza", image: profilePicture },
  { id: 3, name: "The Place", image: profilePicture },
  { id: 4, name: "KFC", image: profilePicture },
  { id: 5, name: "Burger King", image: profilePicture },
  { id: 6, name: "Pizza Hut", image: profilePicture },
  
 
];

function ResturantList() {
  const sliderRef = useRef(null);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      setShowNav(sliderRef.current.scrollWidth > sliderRef.current.clientWidth);
    }
  }, [restaurants]);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className='container'>
      <div className="resturantlist-header">
        <h1>Browse our Restaurants</h1>
        <Link to="/restaurants">See all restaurants</Link>
      </div>

      <div className="resturants-container">
        {/* Location Icon */}
        <div className="resturant-location">
          <div className="resturant-location-icon">
          <RiMapPin2Fill size={30}  />
          </div>
          <span>Enugu</span>
        </div>

        {/* Slider Container */}
        <div className="resturant-slider">
          {showNav && (
            <button className="nav-btn left" onClick={scrollLeft}>
             {'<'}
            </button>
          )}

          <div className="resturants" ref={sliderRef}>
            {restaurants.map((resto) => (
              <div className="resturant" key={resto.id}>
                <img src={resto.image} alt={resto.name} />
                <Link to={`/restaurants/${resto.id}`}>{resto.name}</Link>
              </div>
            ))}
          </div>

          {showNav && (
            <button className="nav-btn right" onClick={scrollRight}>
              {'>'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResturantList;
