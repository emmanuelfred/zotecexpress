import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import { AiOutlineSearch } from "react-icons/ai";
import './ScrolNav.css'
import NotificationDropdown from '../NotificationDropdown/NotificationDropdown';
import CartDropdown from '../CartDropdown/CartDropdown';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown'
function ScrolNav() {
  const [active,setActive] = useState('Home')
  return (
    <div className='container-fluid mt-4 '>
        <div className="ScrolNav">
          <Link to={'/Home'}>
            <img src={logo} alt="" className='brand_logo' />
          </Link>
       
          <ul className="scrolnav-link-container">
            <li 
              onClick={() => setActive("Home")} 
              className={active === "Home" ? "active" : "in_active"}
            >
              <Link to="/">Home</Link> 
              <hr />
            </li>
            <li 
              onClick={() => setActive("Restaurants")} 
              className={active === "Restaurants" ? "active" : "in_active"}
            >
              <Link to="/restaurants">Restaurants</Link> 
              <hr />
            </li>
            <li 
              onClick={() => setActive("Local Market")} 
              className={active === "Local Market" ? "active" : "in_active"}
            >
              <Link to="/local-market">Local Market</Link>
              <hr />
            </li>
            <li 
              onClick={() => setActive("E-Market")} 
              className={active === "E-Market" ? "active" : "in_active"}
            >
              <Link to="/e-market">E-Market</Link>
              <hr />
            </li>
            <li 
              onClick={() => setActive("Direct Import")} 
              className={active === "Direct Import" ? "active" : "in_active"}
            >
              <Link to="/direct-import">Direct Import</Link>
              <hr />
            </li>
          </ul>
          <nav className='scrolnav-activities-container'>
            
            <div className="search-container activity">
              <Link data-bs-toggle="dropdown"aria-expanded="false">
                <AiOutlineSearch size={24} />
               </Link>
              <div className="dropdown-menu dropdown-menu-end p-2 shadow search" >
              <li><h6 className="dropdown-header">What is on you mind?</h6></li>
                <input type="search" name="" id="" placeholder='Search' />
                
              </div>
            </div>
            <div className="notification-container activity ">
            <NotificationDropdown/>
            </div>
           <div className="cart-container activity">
             <CartDropdown/>
           </div>
           <div className="user-container activity">
              <ProfileDropdown/>
           </div>
            
            
                        
          </nav>
            
        </div>

    </div>

  )
}

export default ScrolNav