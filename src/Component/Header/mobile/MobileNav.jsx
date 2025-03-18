import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { AiOutlineSearch } from "react-icons/ai";

import NotificationDropdown from '../NotificationDropdown/NotificationDropdown';
import CartDropdown from '../CartDropdown/CartDropdown';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import MoreDropdown from '../MoreDropdown/MoreDropdown';
import './mob.css';

function MobileNav() {
  const [showSecondaryHeader, setShowSecondaryHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust scroll threshold
        setShowSecondaryHeader(true);
      } else {
        setShowSecondaryHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`MobileNav ${showSecondaryHeader ? "" : "scrolled"}`}>
      <div className="more">
        <MoreDropdown />
      </div>
      <div className="logo">
        <Link to={'/Home'}>
          <img src={logo} alt="Logo" className='brand_logo' />
        </Link>
      </div>

      <nav className='activities-container'>
        <div className="search-container activity">
          <Link data-bs-toggle="dropdown" aria-expanded="false">
            <AiOutlineSearch size={24} />
          </Link>
          <div className="dropdown-menu dropdown-menu-end p-2 shadow search">
            <li><h6 className="dropdown-header">What is on your mind?</h6></li>
            <input type="search" placeholder='Search' />
          </div>
        </div>
        <div className="notification-container activity">
          <NotificationDropdown />
        </div>
        <div className="cart-container activity">
          <CartDropdown />
        </div>
        <div className="user-container activity">
          <ProfileDropdown />
        </div>
      </nav>
    </div>
  );
}

export default MobileNav;
