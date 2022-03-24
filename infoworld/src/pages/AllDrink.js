import React from "react";
import { Link } from "react-router-dom";
import "../styles/AllDrinks.scss";

function AllDrink() {
  return (
    <div className="AllDrink">
      <div className="headerContainer">
        <h1 className="All">MARI</h1>
        <p> Coffe </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default AllDrink;
