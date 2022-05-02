import React, { useState, useEffect } from "react";
import "../styles/Homepage.scss";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Select from "react-select";
import { fetchProductByCategory } from "../utils";

const options = [
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "quantity_stock", label: "Quantity stock" },
];

const Homepage = () => {
  const [state, setState] = useState([]);
  const [category, setCategory] = useState("allDrinks");
  const [sortKey, setSortKey] = useState(options[0]);

  useEffect(() => {
    fetchProductByCategory(category, sortKey)
      .then((response) => response.json())
      .then((data) => setState(data));
  }, [category, sortKey]);

  const onSelectValue = (selectedValue) => {
    setSortKey(selectedValue.value);
  };

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

  return (
    <div className="Homepage">
      <Navbar setCategory={setCategory} />
      <div className="SelectContainer">
        <Select value={sortKey} onChange={onSelectValue} options={options} />
      </div>
      <div className="container">
        {state.length > 0 && renderProducts(state)}
      </div>
    </div>
  );
};

export default Homepage;
