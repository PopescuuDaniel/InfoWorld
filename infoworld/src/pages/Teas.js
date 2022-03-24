import React from "react";
import { Link } from "react-router-dom";

function Teas() {
    return (
        <div className="Teas">
            <div className="headerContainer">
                <h1> Daniel's coffe</h1>
                <p> Coffe </p>
                <Link to="/menu">
                    <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
}

export default Teas;