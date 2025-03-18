import React, { useState, useRef, useEffect, useCallback } from 'react';
import { HiOutlineViewGrid } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './MoreDropdown.css';

import resturant_img from '../../Assets/resturant.jpg';
import e_store from '../../Assets/e_store.jpg';
import local_market from '../../Assets/local_market.jpg';
import direct_import from '../../Assets/direct_import.jpg';

function MoreDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle clicks outside the dropdown
  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside); // For mobile taps
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div className='MoreDropdown' ref={dropdownRef}>
      {/* Toggle dropdown on click */}
      <HiOutlineViewGrid 
        size={29} 
        className='ml-2' 
        onClick={() => setIsOpen((prev) => !prev)} // Toggle open/close
      />
      
      {/* Dropdown Content */}
      <div className={`MoreDropdown-box ${isOpen ? 'show' : ''}`}>
      <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={20}

  className="more_swiper"
>
  {[
    { img: resturant_img, title: 'Restaurants' },
    { img: local_market, title: 'Local Market' },
    { img: e_store, title: 'E-Market' },
    { img: direct_import, title: 'Direct Import' },
    { img: resturant_img, title: 'Restaurants' }
  ].map((item, index) => (
    <SwiperSlide key={index} className="custom-slide">
      <div className="more_box">
        <img src={item.img} alt={item.title} />
        <span>{item.title}</span>
        <Link className='btn'>Order Now</Link>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </div>
  );
}

export default MoreDropdown;
