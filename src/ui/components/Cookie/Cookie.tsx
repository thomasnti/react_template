import { contains } from '../../../application/entities/cart';
import { Product } from '../../../application/entities/product';
import useAddToCart from '../../../application/usecases/addToCart';
import {
  useCartStorage,
  useUserStorage,
} from '../../../infrastructure/services/storageAdapter';

import styles from './Cookie.module.css';
import Toppings from './Toppings';

type CookieProps = {
  cookie: Product;
};

export default function Cookie({ cookie }: CookieProps) {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const { addToCart } = useAddToCart();

  return (
    <article className={styles.cookie}>
      <span className={styles.image}>🍪</span>
      <span className={styles.title}>{cookie.title}</span>
      <Toppings cookie={cookie} />

      {!!user && (
        <button type="button" onClick={() => addToCart(user, cookie)}>
          {cookie.price / 100} ₽
        </button>
      )}

      {contains(cart, cookie) && (
        <span className={styles.contains}>In your cart</span>
      )}
    </article>
  );
}
