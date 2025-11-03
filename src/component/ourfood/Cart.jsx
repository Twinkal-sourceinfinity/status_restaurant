import React from "react";
import "../../css/ourfood/cart.css";

const Cart = () => {
  const cartItems = [
    { name: "Item Name", price: 19.99, img: "/image/sizzler.jpg" },
    { name: "Item Name", price: 19.99, img: "/image/sizzler.jpg" },
    { name: "Item Name", price: 19.99, img: "/image/sizzler.jpg" },
  ];

  const subtotal = 42.0;
  const tax = 6.3;
  const total = subtotal + tax;

  const menubackground = {
        backgroundImage: 'url("/image/bg-image.jpg")',
    };

  return (
    <div className="cart-section" style={menubackground}>
      <h3 className="cart-title">Your Cart</h3>

      {/* {cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <img src={item.img} alt={item.name} className="cart-img" />
          <div className="cart-info">
            <p className="cart-name">{item.name}</p>
            <p className="cart-price">${item.price}</p>
          </div>
          <div className="qty-controls">
            <button>-</button>
            <span>2</span>
            <button>+</button>
          </div>
        </div> */}

        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="item-info">
              <img src={item.img} alt={item.name} className="item-img" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum</p>
              </div>
            </div>

            <div className="item-price">${item.price}</div>

            <div className="item-quantity">
              <button>-</button>
              <button>2</button>
              <button>+</button>
            </div>
          </div>
      ))}

      <div className="cart-summary">
        <p>
          Subtotal <span>${subtotal.toFixed(2)}</span>
        </p>
        <p>
          Tax (15%) <span>${tax.toFixed(2)}</span>
        </p>
      </div>

      <div className="cart-summary">
        <p>
            Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>${total.toFixed(2)}</span>
        </p>
      </div>
      <br></br>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;