import React from "react";
import "./Navbar.css";
import NavBanner from "../../assets/navbanner.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main-navbar">
      <div className="navbar-img">
        <img className="nav-banner" alt="shopping" src={NavBanner} />
      </div>
      <div className="nav-button">
        <ul>
          <li>
            <Link className="navlink" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/Products">
              Products
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/Categories">
              Categories
            </Link>
          </li>
          <li>
            <Link className="navlink" to="/ShoppingCart">
              Shopping Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
