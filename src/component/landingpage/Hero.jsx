import React from "react";
import "../../css/landingpage/hero.css";

const Hero = () => {
    return <>
        <div className="container">
            <div className="image-section">
                <img src={`${process.env.REACT_APP_IMAGE_URL}hero-image.png`} alt="Hero" />
            </div>
            <div className="button-section">
                <button  className="btn">Order Online</button>
                <button  className="btn">Reserve Now</button>
                <button  className="btn">Catering</button>
            </div>
        </div>
        <marquee className="offer-section">Free Potato Fries order over $50</marquee>
        </>
}

export default Hero;