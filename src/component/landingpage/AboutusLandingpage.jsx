import React from "react";
import "../../css/landingpage/aboutus_landingpage.css";

function AboutusLandingpage(){
    return (
        <section className="about-section">
        <div className="about-left">
            <div className="image-stack">
            <img src={`${process.env.REACT_APP_IMAGE_URL}restaurant_front.jpg`} alt="Restaurant decor" className="img-bottom" />
            <img src={`${process.env.REACT_APP_IMAGE_URL}people.jpg`} alt="People" className="img-top" />
            </div>
            <h2 className="since-text">Since 2019</h2>
        </div>

        <div className="about-right">
            <p className="about-subtitle">About us</p>
            <h1 className="about-title">Between Heven &amp; Earth</h1>
            <div className="star-line">
            <span className="star">★</span>
            <hr />
            </div>
            <p className="about-description">
            Status Restaurant showcases the finest in Vegetarian, Vegan and Jain cuisine, complimented by an exceptional dining experience built on careful attention to every aspect of service, food, atmosphere and beverages selection.
            </p>
            <p className="about-description">
            Status Restaurant showcases the finest in Vegetarian, Vegan and Jain cuisine, complimented by an exceptional dining experience built on careful attention to every aspect of service, food, atmosphere and beverages selection.
            </p>
            <button className="discover-button">Discover More</button>
        </div>
        </section>
    );
}

export default AboutusLandingpage; 