import React from "react";
import "../../css/ourfood/ourfood.css";
import Cart from "./Cart";

const Ourfood = () => {
  const dishes = [
    {
      name: "Dhosa",
      price: 29,
      img: `${process.env.REACT_APP_IMAGE_URL}dhosa.png`,
      desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      name: "Sizzler",
      price: 29,
      img: `${process.env.REACT_APP_IMAGE_URL}sizzler.jpg`,
      desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
    {
      name: "Tandoori Chicken",
      price: 29,
      img: `${process.env.REACT_APP_IMAGE_URL}tandoori.jpg`,
      desc: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.",
    },
  ];

const menubackground = {
        backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}bg-image.jpg)`
    };
  
  return (
    <>
    <div className="dishes-container">
      <h2 className="title">OUR DISHES</h2>

      <div className="menu-cart">
        {/* Left Side - Menu Section */}
        <div className="menu-section-food" style={menubackground}>
          <h3 className="subtitle">Our Top Menu</h3>
          <p className="menu-desc">
            Lorem ipsum is a dummy or placeholder text commonly used in graphic
            design, publishing, and web development.
          </p>

          <div className="dishes-list">
            {dishes.map((dish, index) => (
              <div className="dish-card" key={index}>
                <img src={dish.img} alt={dish.name} className="dish-img" />
                <h4 className="dish-name">{dish.name}</h4>
                <p className="dish-desc">{dish.desc}</p>
                <p className="dish-price">${dish.price}</p>
                <button className="order-btn">Order Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Cart Component */}
        <Cart />
      </div>

      <div className="food_menu">
        <span>Appetiser</span>
        <span>Main-Veg</span>
        <span>Main-Non Veg</span>
        <span>Dessert</span>
        <span>Drinks</span>
      </div>
      <div className="menu_dish">
          <div className="dishes-list">
            {dishes.map((dish, index) => (
              <div className="dish-card" key={index}>
                <img src={dish.img} alt={dish.name} className="dish-img" />
                <h4 className="dish-name">{dish.name}</h4>
                <p className="dish-desc">{dish.desc}</p>
                <p className="dish-price">${dish.price}</p>
                <button className="order-btn">Order Now</button>
              </div>
            ))}
            {dishes.map((dish, index) => (
              <div className="dish-card" key={index}>
                <img src={dish.img} alt={dish.name} className="dish-img" />
                <h4 className="dish-name">{dish.name}</h4>
                <p className="dish-desc">{dish.desc}</p>
                <p className="dish-price">${dish.price}</p>
                <button className="order-btn">Order Now</button>
              </div>
            ))}
          </div>
      </div>
    </div>
    <footer>
      <div className="offer-section">© 2025 all rights reserved.</div>
    </footer>
    </>
  );
};

export default Ourfood;