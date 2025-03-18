import React, { useState, useEffect } from "react";
import "./CookieConsent.css"; // Import the CSS file
import cookie from '../Assets/site-image/cookie.png'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null; // If cookies are accepted, do not render the banner

  return (
    <div className="cookie-bar-section">
      <img src={cookie} alt="Cookies" />
      <div className="content">
        <h3>Cookies Consent</h3>
        <p className="font-light">
          This website uses cookies to ensure you get the best experience.
        </p>
        <div className="cookie-buttons">
          <button className="btn btn-solid-default" onClick={handleAccept}>
            I Understand
          </button>
          <a href="#" className="btn default-light1">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
