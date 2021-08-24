import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomeContent from "./components/HomeContent/HomeContent";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CategorizedPage from "./components/CategorizedPage/CategorizedPage";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomeContent} />
          <Route
            path="/Products"
            exact
            component={() => <Products data={items} />}
          />
          <Route
            path="/Categories"
            exact
            component={() => <Categories data={items} />}
          />
          <Route
            path="/Categories/:category"
            exact
            component={() => <CategorizedPage data={items} />}
          />
          <Route path="/ShoppingCart" exact component={ShoppingCart} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
