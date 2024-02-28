import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import styles from "./Shop.module.css";

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

const Shop = () => {
  const { data, error, loading } = useItemData();
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <div>Our best collection</div>
      <div className={styles.cardsContainer}>
        {data.map((item) => (
          <ItemCard
            key={item.id}
            imageUrl={item.image}
            price={item.price}
            name={item.title}
            rating={item.rating.rate}
          />
        ))}
      </div>
    </>
  );
};

export default Shop;
