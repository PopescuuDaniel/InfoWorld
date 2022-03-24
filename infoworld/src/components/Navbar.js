import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Navbar.scss";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const closeBurger = () => {
    setOpenLinks(false);
  };
  return (
    <div className={`navbar ${openLinks ? "open" : ""}`}>
      <div className="nav-links">
        <div className="link">
          <Link onClick={closeBurger} to="/">
            All Drinks
          </Link>
        </div>
        <div className="link">
          <Link onClick={closeBurger} to="/Frappuccinos">
            Frappuccinos
          </Link>
        </div>
        <div className="link">
          <Link onClick={closeBurger} to="/ColdDrinks">
            Cold Drinks
          </Link>
        </div>
        <div className="link">
          <Link onClick={closeBurger} to="/HotDrinks">
            Hot Drinks
          </Link>
        </div>
        <div className="link">
          <Link onClick={closeBurger} to="/Teas">
            Teas
          </Link>
        </div>
        <div className="link">
          <Link onClick={closeBurger} to="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="burger-container" onClick={toggleNavbar}>
        <div className="burger">
          <div className="burger-bar" />
          <div className="burger-bar" />
          <div className="burger-bar" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
