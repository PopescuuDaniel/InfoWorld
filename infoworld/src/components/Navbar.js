import React, { useState } from "react";
import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [openLinks, setOpenLinks] = useState(false);

  const { setCategory } = props

  const closeBurger = () => {
    setOpenLinks(false);
  };

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className={`navbar ${openLinks ? "open" : ""}`}>
      <div className="nav-links">
        <div className="link">
          <button onClick={() => (setCategory('allDrinks'), closeBurger())}>
            All Drinks
          </button>
        </div>
        <div className="link">
          <button onClick={() => (setCategory('frappuccionos'), closeBurger())}>
            Frappuccinos
          </button>
        </div>
        <div className="link">
          <button onClick={() => (setCategory('coldDrinks'), closeBurger())}>
            Cold Drinks
          </button>
        </div>
        <div className="link">
          <button  onClick={() => (setCategory('teas'), closeBurger())}>
            Teas
          </button>
        </div>
        <div className="link">
          <button onClick={() => (setCategory('hotDrinks'), closeBurger())}>
            Hot Drinks
          </button>
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
