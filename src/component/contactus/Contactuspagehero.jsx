import React from "react";
import "../../css/contactus/contactus_hero.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Contactuspagehero = () => {
    const restaurantContainer = {
            backgroundImage: 'url("/image/bg-image.jpg")',
        };

    return (
        <>
        <div>
            <div style={restaurantContainer} className="restaurant-container">
                <div className="restaurant-image">
                    <img src="/image/aboutus_hero.jpeg" alt="Restaurant Interior" />
                </div>
            </div>
        </div>

        <div className="contact-container">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
                Feel Free to reach out to us with any question or inquiries!
            </p>

            <div className="contact-content">
                {/* Left Side - Contact Information */}
                <div className="contact-info">
                <h3>Contact Information</h3>
                <p className="info-item">
                    <FaMapMarkerAlt className="icon" /> 273 Manukau Road Epsom, Auckland 1023
                </p>
                <p className="info-item">
                    <FaPhoneAlt className="icon" /> +64 09 930 4287
                </p>
                <p className="info-item">
                    <FaEnvelope className="icon" /> hello@statusindiancuisine.com
                </p>
                </div>

                {/* Right Side - Message Form */}
                <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
                </div>
            </div>

            <div className="contact-map">
                <img src="/image/map.png" alt="Restaurant Interior" />
            </div>

            <footer>
                <div className="aboutus-offer-section">© 2025 all rights reserved.</div>
            </footer>
        </div>

        </>
    );
}

export default Contactuspagehero;