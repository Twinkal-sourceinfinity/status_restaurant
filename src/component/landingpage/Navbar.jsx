import React from "react";
import '../../css/landingpage/navbar.css';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

 const location = useLocation(); // gives current URL path
const currentPath = location.pathname;
  
  return (
            <header>
              <div className="navbar">
                <div className="logo">
                  <img src="image/status-logo.png" alt="Status Logo" />
                </div>
                <nav className="menu">
                  <ul>
                    <li className={currentPath === "/" ? "active" : ""}><Link to="/">Home</Link></li>
                    <li className={currentPath === "/about" ? "active" : ""}><Link to="/about">About Us</Link></li>
                    <li className={currentPath === "/food" ? "active" : ""}><Link to="/food">Our Food</Link></li>
                    <li className={currentPath === "/franchise" ? "active" : ""}><Link to="/franchise">Franchise</Link></li>
                    <li className={currentPath === "/contact" ? "active" : ""}><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </header>
        );
}

export default Navbar;