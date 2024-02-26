import styles from "./Header.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const Header = ({ selectedPage, setSelectedPage }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerSubContainers}>
          <div className={styles.title}>FakeShop</div>
        </div>
        <div className={styles.headerSubContainers}>
          <Link
            className={
              selectedPage === "Home"
                ? `${styles.navLink} ${styles.selected}`
                : styles.navLink
            }
            to={"/"}
            onClick={() => setSelectedPage("Home")}
          >
            Home
          </Link>
          <Link
            className={
              selectedPage === "Shop"
                ? `${styles.navLink} ${styles.selected}`
                : styles.navLink
            }
            to={"Shop"}
            onClick={() => setSelectedPage("Shop")}
          >
            Shop
          </Link>
        </div>
        <div className={styles.headerSubContainers}>
          <div>bag</div>
          <div>search</div>
        </div>
      </div>
    </>
  );
};

export default Header;
