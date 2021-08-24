import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCartArray from "../../ShoppingCartArray";

function CategorizedPage({ data }) {
  let { category } = useParams();
  const [categorizedArray, setCategorizedArray] = useState();

  useEffect(() => {
    setCategorizedArray(data.filter((item) => item.category === category));
  }, []);

  const handleClick = (id) => {
    const cart = data.find((product) => product.id === id);
    ShoppingCartArray.push(cart);
  };

  return (
    <div className="products">
      <h4 className="product-title">{category.toUpperCase()}</h4>
      {categorizedArray &&
        categorizedArray.map((item, index) => (
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

export default CategorizedPage;
