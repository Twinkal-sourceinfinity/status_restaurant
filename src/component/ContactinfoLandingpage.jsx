import React from 'react';
import '../css/contactinfo_landingpage.css'; // Import the CSS file

function ContactinfoLandingpage()
{
  return (
    <>
    <div className="info-section">
        <div className="info-left">
            <h3 className="info-title">Address</h3>
            <p className="info-details">373 Manukau Road, Epsom, Auckland 1023</p>

            <h3 className="info-title">Contact No</h3>
            <p className="info-details"><a href="tel:+64099304287">+64 09 930 4287</a></p>

            <h3 className="info-title">Email</h3>
            <p className="info-details">hello@statusindian.cuisine.com</p>
        </div>

        <div className="info-center">
            <div className="logo-circle">
            <div className="logo-inner"><img src="image/nz-owned.png" alt="People" className="img-logo-inner" /></div>
            </div>
        </div>

        <div className="info-right">
            <h3 className="hours-title">Opening Hours</h3>
            <div className="hours-list">
            <div className="day-hour">
                <span className="day-name">Monday</span>
                <span className="time-range">11am-3pm, 5pm-10pm</span>
            </div>
            <div className="day-hour">
                <span className="day-name">Tuesday</span>
                <span className="time-range">11am-3pm, 5pm-10pm</span>
            </div>
            <div className="day-hour">
                <span className="day-name">Wednesday</span>
                <span className="time-range">11am-3pm, 5pm-10pm</span>
            </div>
            <div className="day-hour">
                <span className="day-name">Thursday</span>
                <span className="time-range">11am-3pm, 5pm-10pm</span>
            </div>
            <div className="day-hour">
                <span className="day-name">Friday</span>
                <span className="time-range">11am-3pm, 5pm-2am</span>
            </div>
            <div className="day-hour">
                <span className="day-name">Saturday</span>
                <span className="time-range">11am-2am</span>
            </div>
            <div className="day-hour">
                <span className="day-name">Sunday</span>
                <span className="time-range">11am-12am</span>
            </div>
            </div>
        </div>
    </div>
    <footer>
        <div className="offer-section">© 2025 all rights reserved.</div>
    </footer>
    </>
    
  );
};

export default ContactinfoLandingpage;