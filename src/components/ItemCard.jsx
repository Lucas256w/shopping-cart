import styles from "./ItemCard.module.css";
import { useState } from "react";

const ItemCard = ({ imageUrl, name, price, rating, handleAddCart }) => {
  const [input, setInput] = useState(1);

  const handleInc = () => {
    if (input < 9) {
      setInput(input + 1);
    }
  };

  const handleDec = () => {
    if (input > 1) {
      setInput(input - 1);
    }
  };

  const handleValueChange = (e) => {
    if (e.target.value >= 0 && e.target.value <= 9) {
      setInput(e.target.value);
    } else if (e.target.value === "") {
      setInput(1);
    }
  };

  const handleBlur = () => {
    if (input === "" || input < 1 || input > 9) {
      setInput(1);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.img} src={imageUrl} alt={name} />
      </div>
      <div className={styles.description}>
        <div className={styles.name}>{name}</div>
        <div className={styles.rating}>{rating}/5</div>
      </div>
      <div className={styles.priceAndQuant}>
        <div>${price}</div>
        <div className={styles.editQuant}>
          <button onClick={handleDec} className={styles.btn}>
            -
          </button>
          <input
            onChange={(e) => handleValueChange(e)}
            onBlur={handleBlur}
            type="number"
            value={input}
          />
          <button onClick={handleInc} className={styles.btn}>
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => handleAddCart(name, price, imageUrl, input)}
        className={`${styles.addCart} ${styles.btn}`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemCard;
