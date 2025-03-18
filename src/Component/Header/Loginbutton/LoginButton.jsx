import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import "./LoginButton.css";

function LoginButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Logged in successfully!");
    }, 2000); // Simulate login delay
  };

  return (
    <button className={`login-btn ${loading ? "loading" : ""}`} onClick={handleClick} disabled={loading}>
      {loading ? <span className="spinner"></span> : <><FiLogIn className="icon" /> Login</>}
    </button>
  );
}

export default LoginButton;
