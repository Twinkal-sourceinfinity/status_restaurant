import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
            <header>
              <div className="navbar">
                <div className="logo">
                  <img src="image/status-logo.png" alt="Status Logo" />
                </div>
                <nav className="menu">
                  <ul>
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Food</a></li>
                    <li><a href="#">Franchise</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                </nav>
              </div>
            </header>
        );
}

export default Navbar;