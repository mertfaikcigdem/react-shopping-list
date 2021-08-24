import React, { useEffect } from "react";
import "./Products.css";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartArray from "../../ShoppingCartArray";

function Products({ data }) {
  const handleClick = (id) => {
    const cart = data.find((product) => product.id === id);
    ShoppingCartArray.push(cart);
  };
  return (
    <div className="products">
      {data.map((item, index) => (
        <div key={index} className="product">
          <div className="product-cart">
            <img className="product-img" src={item.image} alt={item.title} />
            <FaShoppingCart
              onClick={() => handleClick(item.id)}
              className="myfavorite"
            />
          </div>
          <div className="product-info">
            <span>{item.title}</span>
            <span>{item.price}</span>
            <span>{item.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
