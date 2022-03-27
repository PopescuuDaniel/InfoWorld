import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProductByCategory } from "../utils";
import ProductCard from "../components/ProductCard";
import "../styles/Container.scss";

function AllDrinks() {
  const [state, setState] = useState([]);

  const renderProducts = (productsList) => {
    return productsList.map((item, index) => {
      return (
        <ProductCard
          key={index}
          image={item.image}
          name={item.name}
          quantity={item.quantity_stock}
          price={item.price}
          description={item.description}
          comments={item.comments}
          rating={item.rating}
        />
      );
    });
  };

  useEffect(() => {
    fetchProductByCategory("alldrinks")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);

  console.log("STATE:", state);

  return (
    <div className="container">{state.length > 0 && renderProducts(state)}</div>
  );
}

export default AllDrinks;
