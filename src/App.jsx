import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Home");

  return (
    <>
      <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Outlet />
    </>
  );
};

export default App;
