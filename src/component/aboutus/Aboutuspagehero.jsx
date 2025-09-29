import React from "react";
import "../../css/aboutus/aboutus_hero.css";


const Aboutuspagehero = () => {
    const restaurantContainer = {
            backgroundImage: 'url("/image/bg-image.jpg")',
        };

    return (
        <div style={restaurantContainer} className="restaurant-container">
            <div className="restaurant-image">
                <img src="/image/aboutus_hero.jpeg" alt="Restaurant Interior" />
            </div>
        </div>
    // <div className="hero-container">

    //   {/* Buttons Section */}
    //   <div className="hero-buttons">
    //     <button className="hero-btn">Order Online</button>
    //     <button className="hero-btn">Reserve Now</button>
    //     <button className="hero-btn">Catering</button>
    //   </div>
    // </div>
  );
}

export default Aboutuspagehero;