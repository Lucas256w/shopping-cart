import styles from "./ItemCard.module.css";

const ItemCard = ({ imageUrl, name, price, rating }) => {
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
          <button>-</button>
          <input type="number" />
          <button>+</button>
        </div>
      </div>
      <button className={styles.addCart}>Add to Cart</button>
    </div>
  );
};

export default ItemCard;
