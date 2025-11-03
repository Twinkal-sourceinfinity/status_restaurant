import React from "react";
import "../../css/landingpage/bestmenu.css";

const menuItems = [
  {
    name: "Dahi Puri",
    description: "Crispy, tangy yogurt snack.",
    price: "16.90$",
    image: `url(${process.env.REACT_APP_IMAGE_URL}dahi-puri.jpeg)`,
  },
  {
    name: "Garlic Naan",
    description: "Buttery garlic flatbread.",
    price: "6.90$",
    image: `url(${process.env.REACT_APP_IMAGE_URL}garlic-naan.jpg)`,
  },
  {
    name: "Palak Paneer",
    description: "Spinach and cheese curry.",
    price: "25.90$",
    image: `url(${process.env.REACT_APP_IMAGE_URL}palak-paneer.jpg)`,
  },
  {
    name: "Samosa",
    description: "Spiced potato pastry with paneer.",
    price: "19.90$",
    image: `url(${process.env.REACT_APP_IMAGE_URL}samosa.jpg)`,
  },
];

function Bestmenu() {
  return (
    <div className="menu-section">
        <h2>Our Best Menu</h2>
        <p className="subtitle">Handpicked favorites you’ll fall in love with.</p>
        <button className="view-button">View More</button>

        <div className="menu-grid">
            {menuItems.map((item, index) => (
                <div className="menu-card">
                    <div className="menu-img">
                        <img src={item.image} alt={item.image} />
                    </div>
                    <div className="menu-info">
                        <h3 className="menu-title">{item.name}</h3>
                        <p className="menu-desc">{item.description}</p>
                        <p className="menu-price">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div> 
  );
}

export default Bestmenu;
