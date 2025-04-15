import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Component/Header/Header";
import Error from "./Pages/Error";
import Footer from "./Component/Footer/Footer";
import CookieConsent from "./Component/CookieConsent/CookieConsent";
import { LocationProvider } from "./Context/LocationContext"; // Import LocationContext
import { AuthProvider } from "./Context/AuthContext"; // Import AuthContext
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./dashboard/Dashboard"; // Import Admin Dashboard

function App() {
  return (
    <BrowserRouter> {/* ✅ Place BrowserRouter at the top */}
      <AuthProvider> {/* ✅ Now AuthProvider is inside BrowserRouter */}
        <LocationProvider> {/* Wrap with LocationProvider */}
          <CookieConsent />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </LocationProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
