import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUser, FaChevronDown } from "react-icons/fa";
import {
  FiBox,
  FiClock,
  FiHeart,
  FiGift,
  FiUserPlus,
  FiLogOut,
  FiUser,
  FiHelpCircle
} from "react-icons/fi";
import "./ProfileDropdown.css";
import profilePicture from '../../Assets/p1_product_i1.png'
import LoginButton from "../Loginbutton/LoginButton";

function ProfileDropdown() {
  // Simulated user data (Replace with actual user state from backend)
  const [user, setUser] = useState({
    isLoggedIn: true, // Change to false to simulate a logged-out state
    name: "Kate",
    profilePic: profilePicture, // Replace with real image URL
  });

  return (
    <div className="dropdown user">
      <Link
        className="d-flex align-items-center dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* Show User Icon when NOT Logged In, Else Show Profile Pic */}
        {user.isLoggedIn ? (
          <img
            src={user.profilePic}
            alt="User Profile"
            className="profile-pic"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
          
            }}
          />
        ) : (
          <FaRegUser size={26} />
        )}

        {/* Greeting with User Name when Logged In */}
        <span className="username">
          {user.isLoggedIn ? `Hi, ${user.name}` : ""}
         
        </span>
      </Link>

      {/* Dropdown Menu */}
      <div
        className="dropdown-menu dropdown-menu-end p-2 shadow"
        style={{ width: "300px" }}
      >
        {user.isLoggedIn ? (
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <FiBox className="me-2" />
              <span>Past Orders</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <FiClock className="me-2" />
              <span>Upcoming Orders</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <FiHeart className="me-2" />
              <span>Saved</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <FiGift className="me-2" />
              <span>Gift Cards</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <FiUserPlus className="me-2" />
              <span>Refer a Friend</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <FiLogOut className="me-2" />
              <span>Logout</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <FiUser className="me-2" />
              <span>Account</span>
            </div>
            <div className="col-6 d-flex align-items-center">
              <FiHelpCircle className="me-2" />
              <span>Help</span>
            </div>
          </div>
        ) : (
          <div className="btn-contianer ">
            <LoginButton/>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileDropdown;
