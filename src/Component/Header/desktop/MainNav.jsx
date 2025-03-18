import React from 'react'
import './MainNav.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { AiOutlineSearch , AiOutlineShopping} from "react-icons/ai";
import { FaMapMarkerAlt,FaChevronDown } from "react-icons/fa";
import NotificationDropdown from '../NotificationDropdown/NotificationDropdown';
import { HiOutlineViewGrid } from "react-icons/hi";
import CartDropdown from '../CartDropdown/CartDropdown';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import MoreDropdown from '../MoreDropdown/MoreDropdown';
import LocationSelector from '../LocationSelector';


function MainNav() {
  return (
    <div className='MainNav'>
      <div className="brand">
      <Link to={'/Home'}>
          <img src={logo} alt="" className='brand_logo' />
        </Link>
      <LocationSelector/> 
      </div>
      <div className="right-nav">
        <div className="MainNav-search-container">
          <AiOutlineSearch size={40} />
          <input type="search" placeholder="What's on you mind" />
        </div>
        <div className="nav">
        <Link><AiOutlineShopping size={27}/> Order Now</Link>
        <MoreDropdown/>

        </div>
        
        <ul className="activities-container">
        <li className='user-container' > <ProfileDropdown/></li>
          <li className='notification-container'><NotificationDropdown/></li>
          <li className='cart-container'> <CartDropdown/></li>
         

        </ul>
      </div>
      

    </div>
  )
}

export default MainNav