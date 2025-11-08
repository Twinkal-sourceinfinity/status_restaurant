import React from "react";
import "../../css/aboutus/chef_detail.css";

const Chefdetail = () => {
  return (
    <>
        <div className="chefs-section">
        <h2 className="chefs-title">Meet Our Chefs</h2>
        <div className="chefs-container">
            
            {/* Chef 1 */}
            <div className="chef-card">
            <img src={`${process.env.REACT_APP_IMAGE_URL}chef_2.png`} alt="Chef Anil" className="chef-img" />
            </div>

            <div className="chef-detail">
                <div>
                    <p className="chef-name">Chef Anil</p>
                    <p className="chef-desc">
                        Chef Anil brings 20+ years of experience in traditional Indian cuisine.
                    </p>
                </div>
                <div>
                    <p className="chef-name">Chef Raj</p>
                    <p className="chef-desc">
                        Chef Raj brings 20+ years of experience in traditional Indian cuisine.
                    </p>
                </div>
            </div>

            {/* Chef 2 */}
            <div className="chef-card">
            <img src={`${process.env.REACT_APP_IMAGE_URL}chef_1.png`} alt="Chef Raj" className="chef-img chef-img1" />
            </div>
        </div>
        </div>
        <footer>
            <div className="aboutus-offer-section">© 2025 all rights reserved.</div>
        </footer>
    </>
  );
};

export default Chefdetail;
