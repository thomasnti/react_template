import { totalPrice } from '../../../application/entities/product';
import { useCartStorage } from '../../../infrastructure/services/storageAdapter';
import Cookie from '../Cookie/Cookie';
import styles from './Cart.module.css';

export default function Cart() {
  const { cart } = useCartStorage();

  return (
    <section>
      <h2>Cart</h2>
      <ul className={styles.list}>
        {cart.products.map((product) => (
          <li key={product.id}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {totalPrice(cart.products) / 100} €</p>
    </section>
  );
}
