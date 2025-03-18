import React, { useState } from "react";
import './Footer.css'
import { FaCreditCard, FaWallet, FaHeadset, FaTruck, FaAward, FaMobileAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaPaperPlane } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // Close icon
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import google from '../Assets/site-image/playstore.jpg'
import apple from '../Assets/site-image/appstore.jpg'
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import images from "../Assets/items/gallary";
  

function Footer() {
    const [selectedImage, setSelectedImage] = useState(null);
    const features = [
        { icon: <FaCreditCard />, text: "100% Payment Secured" },
        { icon: <FaWallet />, text: "Support lots of Payments" },
        { icon: <FaHeadset />, text: "24 hours / 7 days Support" },
        { icon: <FaTruck />, text: "Free Delivery on first order" },
        { icon: <FaAward />, text: "Best Price Guaranteed" },
        { icon: <FaMobileAlt />, text: "Mobile Apps Ready" },
      ];
  return (
    <div className='footer'>
          {/*=========Services===========*/ }
        <div className="icon-container row">
        {features.map((feature, index) => (
            <div key={index} className="col-md-2 col-sm-4 col-6 ">
            <div className="icon-box">
                <span className="text-light-green icon">{feature.icon}</span>
                <span className="text-custom-white">{feature.text}</span>
            </div>
            </div>
        ))}
        </div>
        {/*=========Gallry===========*/ }
        <div className="gallery-container">
        {/* Image Slider */}
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={0} // No gap between images
            slidesPerView={3} // Show 3 images at a time
            breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            }}
        >
            {images.map((image, index) => (
            <SwiperSlide key={index} onClick={() => setSelectedImage(image)}>
                <img src={image} alt={`Slide ${index}`} className="gallery-image" />
            </SwiperSlide>
            ))}
        </Swiper>

        {/* Modal for Larger Image */}
        {selectedImage && (
            <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <FaTimes className="close-icon" onClick={() => setSelectedImage(null)} />
                <img src={selectedImage} alt="Large view" className="large-image" />
            </div>
            </div>
        )}
        </div>

        <div className="container-fluid">
            <div className="row">
                {/* Need Help Section */}
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-contact">
                    <h6>Need Help</h6>
                    <ul>
                    <li><span>Call Us:</span> <a href="tel:+347123456789">+(347) 123 456 789</a></li>
                    <li><span>Email Us:</span> <a href="mailto:demo@domain.com">demo@domain.com</a></li>
                    <li><span>Twitter:</span> <a href="#">@quickmunch</a></li>
                    <li><span>Instagram:</span> <a href="#">@quickmunch</a></li>
                    </ul>
                </div>
                </div>
             

                {/* Get to Know Us */}
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                    <h6>Get to Know Us</h6>
                    <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/socialize">Socialize</Link></li>
                    <li><Link to="/quickmunch">Quickmunch</Link></li>
                    <li><Link to="/perks">Perks</Link></li>
                    </ul>
                </div>
                </div>

                {/* Let Us Help You */}
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                    <h6>Let Us Help You</h6>
                    <ul>
                    <li><Link to="/account-details">Account Details</Link></li>
                    <li><Link to="/order-history">Order History</Link></li>
                    <li><Link to="/find-restaurant">Find Restaurant</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/track-order">Track Order</Link></li>
                    </ul>
                </div>
                </div>

                {/* Doing Business */}
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                    <h6>Doing Business</h6>
                    <ul>
                    <li><Link to="/suggest-idea">Suggest an Idea</Link></li>
                    <li><Link to="/partner-restaurant">Be a Partner Restaurant</Link></li>
                    <li><Link to="/create-account">Create an Account</Link></li>
                    <li><Link to="/help">Help</Link></li>
                    </ul>
                </div>
                </div>

                {/* Download Apps */}
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-links">
                    <h6>Download Apps</h6>
                    <div className="appimg">
                    <a href="#">
                        <img src={google} className="img-fluid" alt="Play Store" />
                    </a>
                    </div>
                    <div className="appimg">
                    <a href="#">
                        <img src={apple} className="img-fluid" alt="App Store" />
                    </a>
                    </div>
                </div>
                </div>

                {/* Newsletter */}
                <div className="col-xl col-lg-4 col-md-4 col-sm-6">
                <div className="footer-contact">
                    <h6>Newsletter</h6>
                    <form className="subscribe_form">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Enter your email" />
                        <button className="btn btn-second btn-submit" type="button">
                        <FaPaperPlane />
                        </button>
                    </div>
                    </form>
                </div>
                </div>

                {/* Social Media Links */}
                <div className="col-md-12 text-center mt-4">
                <h6>Follow Us</h6>
                <ul className="social-icons">
                    <li><a href="#"><FaFacebookF /></a></li>
                    <li><a href="#"><FaTwitter /></a></li>
                    <li><a href="#"><FaInstagram /></a></li>
                    <li><a href="#"><FaPinterestP /></a></li>
                    <li><a href="#"><FaYoutube /></a></li>
                </ul>
                </div>
            </div>
            </div>
    </div>
  )
}

export default Footer