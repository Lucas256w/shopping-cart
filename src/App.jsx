import { Link, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./components/Cart";

import styles from "./App.module.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    // Prevent body from scrolling when cart is shown
    if (showCart) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showCart]);

  const { name } = useParams();
  return (
    <div className={styles.root}>
      <Header setShowCart={setShowCart} />
      {name === "Shop" ? <Shop /> : <Home />}
      {showCart && (
        <>
          <Cart cart={cart} />
          <div
            onClick={() => setShowCart(false)}
            className={styles.background}
          ></div>
        </>
      )}
    </div>
  );
};

export default App;
