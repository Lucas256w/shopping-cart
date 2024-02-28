import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ setShowCart }) => {
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
          <div onClick={() => setShowCart(true)}>bag</div>
          <div>search</div>
        </div>
      </div>
    </>
  );
};

export default Header;
