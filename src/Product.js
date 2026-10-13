
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ productObj, title, nextPath, nextLabel }) => {
  return (
    <div className="product-page">
      <h1>{title}</h1>

      <div className="product-list">
        {productObj.map((item) => (
          <div className="containerCard" key={item.name}>
            <img
              src={item.image}
              alt={item.name}
              className="imageShoe"
            />

            <h3 className="headingShoe">{item.name}</h3>

            <div className="priceContainerShoe">
              <h4 className="priceShoe">₹{item.price}</h4>
              <strike className="strikeShoe">
                ₹{item.strikePrice}
              </strike>
            </div>

            <button
              className="buttonShoe"
              onClick={() => alert(item.name + " selected!")}
            >
              BUY NOW
            </button>
          </div>
        ))}
      </div>

      <div className="product-navigation">
        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to={nextPath}>
          <button>{nextLabel}</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;