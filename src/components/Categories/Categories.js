import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = ({ data }) => {
  const [categories, setCategories] = useState([]);

  const categoriesArray = [];

  useEffect(() => {
    data.map((product) => categoriesArray.push(product.category));
    setCategories([...new Set(categoriesArray)]);
  }, []);

  return (
    <div className="main">
      {categories &&
        categories.map((category, index) => (
          <div key={index} className="categories">
            <Link to={`Categories/${category}`}>
              <span>{category}</span>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Categories;
