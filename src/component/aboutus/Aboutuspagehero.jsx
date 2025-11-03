import React from "react";
import "../../css/aboutus/aboutus_hero.css";


const Aboutuspagehero = () => {
    const restaurantContainer = {
            backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}bg-image.jpg)`,
        };

    const buttonContainer = {
            backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}bg-image.jpg)`,
        };

    return (
        <div>
            <div style={restaurantContainer} className="restaurant-container">
                <div className="restaurant-image">
                    <img 
                        src={`${process.env.REACT_APP_IMAGE_URL}aboutus_hero.jpeg`}
                        alt="Restaurant Interior" />
                </div>
            </div>
            <div style={buttonContainer} className="hero-buttons">
                <button className="hero-btn">Order Online</button>
                <button className="hero-btn">Reserve Now</button>
                <button className="hero-btn">Catering</button>
            </div>
        </div>
    );
}

export default Aboutuspagehero;