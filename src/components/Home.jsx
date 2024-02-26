import styles from "./Home.module.css";
import { Link } from "react-router-dom";
const Home = ({ setSelectedPage }) => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.introduction}>
          The most <span className={styles.underlined}>beautiful</span> and{" "}
          <span className={styles.underlined}>high-quality</span> clothes in the
          whole world
        </div>
        <div className={styles.description}>
          we are proud of the quality of our product and will continue to
          deliver the best we have to offer to our loyal consumers
        </div>
        <div className={styles.btnContainer}>
          <Link to={"Shop"} className={styles.btn}>
            Explore Now
          </Link>
        </div>
      </div>
      <div>Shirt</div>
    </div>
  );
};

export default Home;
