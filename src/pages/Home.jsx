import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const useItemData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { data, error, loading };
};

const Home = ({ setSelectedPage }) => {
  const { data, error, loading } = useItemData();

  if (loading) return <div>Loading...</div>;

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
          <Link to={"/Shop"} className={styles.btn}>
            Explore Now
          </Link>
        </div>
      </div>
      <img src={data[1].image} alt={data[1].title} />
    </div>
  );
};

export default Home;
