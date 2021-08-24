import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="info">
        <h5>CONTACT</h5>
        <ul>
          <li>+855 55 861 12233</li>
          <li>support@shopping.com</li>
          <li>Istanbul, Turkey</li>
        </ul>
      </div>
      <div className="info">
        <h5>COMPANY INFO</h5>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div className="info">
        <h5>PURCHASE INFO</h5>
        <ul>
          <li>Payment Methods</li>
          <li>Shipping & Delivery</li>
          <li>Return Policy</li>
        </ul>
      </div>
      <div className="info">
        <h5>CUSTOMER SERVICE</h5>
        <ul>
          <li>Contact Us</li>
          <li>Frequently Asked Questions</li>
        </ul>
      </div>
      <div className="info">
        <h5>FOLLOW US</h5>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
