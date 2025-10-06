import React from "react";
import "../../css/aboutus/aboutus_detail.css";

function Aboutuspagedetail(){
    return (
        <section className="about-detail-section">
            <div className="about-left-section">
                <p className="about-subtitle">Our Story</p>
                <h1 className="about-title">Between Heven &amp; Earth</h1>
                <div className="star-line">
                <span className="star">★</span>
                <hr />
                </div>
                <p className="about-description">
                At Status Indian Cuisine, we offer a perfect blend of tradition and modern comfort. Since 2017, we’ve been proudly serving Auckland with dishes inspired by Indian heritage, crafted using authentic spices and passion. Whether you dine in or order online, we promise a flavorful experience.
                </p>
                <p className="about-description">
                Fresh, local and amazing. 100% Vegetarian Restaurant  with Vegan and Jain Options are available.
                </p>
                <p className="about-description">
                At Status Indian Cuisine, we offer a perfect blend of tradition and modern comfort. Since 2017, we’ve been proudly serving Auckland with dishes inspired by Indian heritage, crafted using authentic spices and passion. Whether you dine in or order online, we promise a flavorful experience.
                </p>
            </div>
            <div className="about-right-section">
                <div className="chef-image-div">
                    <img src="image/group_chef.jpg" alt="Chef" className="chef-img" />
                </div>
            </div>
        </section>
    );
}

export default Aboutuspagedetail; 