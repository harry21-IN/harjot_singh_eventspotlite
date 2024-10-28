import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-parent">
            <div className="footer-logo">
                <h2>EventSpot Lite</h2>
                <p>EST 2024</p>
            </div>
        </div>
        <div className="footer-social">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/facebook.png" alt="" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/instagram.png" alt="" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/youtube.png" alt="" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/assets/twitter.png" alt="" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Contact Us</a></li>
            <li><a href="#contact">Careers</a></li>
            <li><a href="#faq">Privacy Policy</a></li>
            <li><a href="#faq">Privacy Preference Center</a></li>
          </ul>
        </div>

        {/* <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@eventspotlite.com</p>
          <p>Phone: +123 456 7890</p>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} EventSpot Lite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
