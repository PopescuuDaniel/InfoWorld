import React from "react";
import "../styles/ProductCard.scss";

function ProductCard(props) {
  const { image, name, quantity, price, description, comments, rating } = props;
  console.log(image);

  return (
    <div className="card">
      <div className="image">
        <img src={image} width="100%" height="100%" />
      </div>
      <div className="box">
        <div className="name">
          <p>{name}</p>
        </div>
        <div className="cantitate">
          <p>{quantity}</p>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="comments">
          <div>
            {comments.map((item, index) => (
              <div key={index}>
                <div>Autor: {item.author}</div>
                <div>Mesaj: {item.content}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rating">
          <p>{rating}</p>
        </div>
        <div className="price">
          <p>{price} RON</p>
        </div>
        <div className="about">
          <button>Learn More</button>
          <span></span>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
