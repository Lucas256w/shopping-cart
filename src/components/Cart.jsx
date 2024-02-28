import styles from "./Cart.module.css";

const Cart = ({ cart }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.title}>
        <div>Cart</div>
      </div>
      <div className={styles.total}>
        <div>Total:</div>
        <div>$0</div>
      </div>
      <button className={styles.btn}>CHECKOUT</button>
    </div>
  );
};

export default Cart;
