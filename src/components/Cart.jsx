import styles from "./Cart.module.css";

const Cart = ({ cart }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.title}>
        <div>Cart</div>
      </div>
      {cart.map((item) => (
        <div className={styles.itemContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.img} src={item.imageUrl} alt={item.name} />
            <div className={styles.quantity}>{item.quantity}</div>
          </div>
          <div>{item.name}</div>
          <div className={styles.price}>${item.price}</div>
        </div>
      ))}
      <div className={styles.total}>
        <div>Total:</div>
        <div>
          $
          {Math.round(
            cart.reduce((acc, item) => acc + item.price * item.quantity, 0) *
              100
          ) / 100}
        </div>
      </div>
      <button className={styles.btn}>CHECKOUT</button>
    </div>
  );
};

export default Cart;
