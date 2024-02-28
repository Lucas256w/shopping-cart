import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import cartLogo from "/cart.svg";
import searchLogo from "/search.svg";

const Header = ({ setShowCart, cart }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerSubContainers}>
          <div className={styles.title}>FakeShop</div>
        </div>
        <div className={`${styles.headerSubContainers} ${styles.middle}`}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.selected}` : styles.navLink
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.selected}` : styles.navLink
            }
            to={"/Shop"}
          >
            Shop
          </NavLink>
        </div>
        <div className={styles.headerSubContainers}>
          <div className={styles.cartLogoContainer}>
            <img
              className={styles.svg}
              onClick={() => setShowCart(true)}
              src={cartLogo}
              alt="cart"
            />
            <div className={styles.cartQuantity}>
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </div>
          </div>
          <img className={styles.svg} src={searchLogo} alt="search" />
        </div>
      </div>
    </>
  );
};

export default Header;
