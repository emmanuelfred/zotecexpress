import React, { useState, useEffect } from "react";
import './FlashSaleBanner.css'

const FlashSaleBanner = () => {
    // Hardcoded flash sale data (can be replaced with dynamic data later)
    const flashSale = {
        product: "Latest Jacket",
        discount: "70%",
        price: 75,
        endTime: new Date().getTime() + 24 * 60 * 60 * 1000, // 24 hours from now
    };

    const [timeLeft, setTimeLeft] = useState({});

    // Function to update countdown timer
    const updateTimeLeft = () => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = flashSale.endTime - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);
    };

    useEffect(() => {
        updateTimeLeft();
    }, []);

    return (
        
        <div className="flash-sale-container">
            <div className="flash-sale-banner">
                <div className="flash-sale-content">
                    <h2>🔥 Flash Sale!</h2>
                    <h3 className="discount-text">Get <span>{flashSale.discount}</span> OFF</h3>
                    <h4 className="deal-text">Deal of the Day: <span>${flashSale.price}</span></h4>

                    {/* Countdown Timer */}
                    <div className="flash-sale-timer">
                        <div className="timer-box">
                            <h2>{timeLeft.days}</h2>
                            <p>Days</p>
                        </div>
                        <div className="timer-box">
                            <h2>{timeLeft.hours}</h2>
                            <p>Hours</p>
                        </div>
                        <div className="timer-box">
                            <h2>{timeLeft.minutes}</h2>
                            <p>Minutes</p>
                        </div>
                        <div className="timer-box">
                            <h2>{timeLeft.seconds}</h2>
                            <p>Seconds</p>
                        </div>
                    </div>

                    {/* Shop Now Button */}
                    <button className="shop-now-btn" onClick={() => (window.location.href = "/shop")}>
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleBanner;
