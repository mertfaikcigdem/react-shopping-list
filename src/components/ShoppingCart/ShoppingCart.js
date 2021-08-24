import React, { useState } from "react";
import ShoppingCartArray from "../../ShoppingCartArray";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [array, setArray] = useState(ShoppingCartArray);

  const deletedItem = (id) => {
    setArray(array.filter((product) => product.id !== id));
  };
  return (
    <div className="products">
      {array.length === 0 ? (
        <h4>Your shopping cart is empty</h4>
      ) : (
        array &&
        array.map((item, index) => (
          <div key={index} className="product">
            <div className="product-cart">
              <img className="product-img" src={item.image} alt={item.title} />
            </div>
            <div className="product-info">
              <span>{item.title}</span>
              <span>{item.price}</span>
              <span>{item.category}</span>
              <button
                onClick={() => deletedItem(item.id)}
                className="remove-button"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCart;
