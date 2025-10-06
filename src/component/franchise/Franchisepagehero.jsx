import React from "react";
import "../../css/franchise/franchise_hero.css";
import { FaUtensils, FaHeadset, FaChalkboardTeacher, FaStore } from "react-icons/fa";


const Franchisepagehero = () => {

    return (
        <div>
            <div className="image-container">
                <div className="franchise-image">
                    <img src="/image/franchise.jpg" alt="Franchise Interior" />
                </div>
            </div>
            <div className="why-container">
                <h2 className="why-title">Why Choose Us?</h2>
                <p className="why-desc">
                    In New Zealand, the rise of vegetarianism and veganism has spurred a notable
                    increase in the availability and popularity of vegetarian restaurant franchises.
                    Our establishments cater to a growing demographic seeking plant-based options
                    that align with their health and ethical values. Here are some of the prominent
                    vegetarian restaurant franchises available in New Zealand.
                </p>

                <div className="why-grid">
                    <div className="why-box">
                    <div className="why-icon red-bg">
                        <FaStore />
                    </div>
                    <div>
                        <h3>Established Brand</h3>
                        <p>Leverage our trusted brand and well known in the Indian restaurant industry</p>
                    </div>
                    </div>

                    <div className="why-box">
                    <div className="why-icon red-bg">
                        <FaUtensils />
                    </div>
                    <div>
                        <h3>Quality Recipes</h3>
                        <p>Access to our exclusive, time-tested recipes that customers love</p>
                    </div>
                    </div>

                    <div className="why-box">
                    <div className="why-icon red-bg">
                        <FaHeadset />
                    </div>
                    <div>
                        <h3>Ongoing Support</h3>
                        <p>Continuous support in operations, marketing, management</p>
                    </div>
                    </div>

                    <div className="why-box">
                    <div className="why-icon red-bg">
                        <FaChalkboardTeacher />
                    </div>
                    <div>
                        <h3>Full Training</h3>
                        <p>
                        Comprehensive training programs to ensure you're fully prepared to run your
                        franchise
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="aboutus-offer-section">© 2025 all rights reserved.</div>
            </footer>
        </div>
    );
}

export default Franchisepagehero;