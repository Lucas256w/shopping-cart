import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerSubContainers}>
          <div className={styles.title}>FakeShop</div>
        </div>
        <div className={styles.headerSubContainers}>
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
            to={"Shop"}
          >
            Shop
          </NavLink>
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
