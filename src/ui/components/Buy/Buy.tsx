/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import useOrderProducts from '../../../application/usecases/orderProducts';
import {
  useCartStorage,
  useUserStorage,
} from '../../../infrastructure/services/storageAdapter';
import currentDatetime from '../../../utilities/datetime';

import styles from './Buy.module.css';
import { UserName } from '../../../application/entities/user';

export default function Buy() {
  const { orderProducts } = useOrderProducts();
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  const [name, setName] = useState<UserName>(user?.name ?? '');
  const [email, setEmail] = useState<Email>(user?.email ?? '');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user || !cart.products.length) return null;

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();
    await orderProducts(user!, cart, currentDatetime());
    setLoading(false);
  }

  return (
    <section>
      <h2>Checkout</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* <label htmlFor="test"> */}
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Address</span>
          <textarea
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Preparing an order...' : 'Checkout'}
        </button>
      </form>
    </section>
  );
}
