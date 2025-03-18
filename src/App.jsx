import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Component/Header/Header";
import Error from "./Pages/Error";
import Footer from "./Component/Footer/Footer";
import CookieConsent from "./Component/CookieConsent/CookieConsent";
import { LocationProvider } from "./Context/LocationContext"; // Import LocationContext
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <LocationProvider> {/* Wrap the entire app */}
      <BrowserRouter>
        <CookieConsent />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LocationProvider>
  );
}

export default App;
