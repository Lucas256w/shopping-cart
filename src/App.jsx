import { Link, Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const App = () => {
  const { name } = useParams();
  return (
    <>
      <Header />
      {name === "Shop" ? <Shop /> : <Home />}
    </>
  );
};

export default App;
