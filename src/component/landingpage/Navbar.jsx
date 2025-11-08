import React from "react";
import '../../css/landingpage/navbar.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

const location = useLocation(); // gives current URL path
console.log(location)
const currentPath = location.pathname;
  
  return (
            <header>
              <div className="navbar">
                <div className="logo">
                  <img src={`${process.env.REACT_APP_IMAGE_URL}status-logo.png`} alt="Status Logo" />
                </div>
                <nav className="menu">
                  <ul>
                    <li className={currentPath === "/status_restaurant/" ? "active" : ""}><Link to="status_restaurant/">Home</Link></li>
                    <li className={currentPath === "/status_restaurant/about" ? "active" : ""}><Link to="status_restaurant/about">About Us</Link></li>
                    <li className={currentPath === "/status_restaurant/food" ? "active" : ""}><Link to="status_restaurant/food">Our Food</Link></li>
                    <li className={currentPath === "/status_restaurant/franchise" ? "active" : ""}><Link to="status_restaurant/franchise">Franchise</Link></li>
                    <li className={currentPath === "/status_restaurant/contact" ? "active" : ""}><Link to="status_restaurant/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </header>
        );
}

export default Navbar;