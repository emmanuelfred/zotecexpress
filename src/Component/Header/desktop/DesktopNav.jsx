import React, { useState, useEffect } from "react";
import "./DesktopNav.css";
import ScrolNav from "./ScrolNav";
import MainNav from "./MainNav";

function DesktopNav() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const percentage = Math.min(scrollTop / (0.7 * windowHeight), 1); // Normalize between 0 and 1
      setScrollProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="DesktopNav">
      {/* ScrolNav should be on top and disappear first */}
      <div
        className="scrol-nav-wrapper"
        style={{
          transform: `scale(${1 - scrollProgress * 0.5})`,
          opacity: `${1 - scrollProgress}`,
          zIndex: 2, // Make sure it's above MainNav
        }}
      >
        <ScrolNav />
      </div>

      {/* MainNav should appear later and grow */}
      <div
        className="main-nav-wrapper"
        style={{
          transform: `scale(${0.7 + scrollProgress * 0.3})`,
          opacity: `${scrollProgress}`,
          zIndex: 1, // Start below ScrolNav
        }}
      >
        <MainNav />
      </div>
    </div>
  );
}

export default DesktopNav;
