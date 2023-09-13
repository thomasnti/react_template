/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { Navigate } from 'react-router-dom';
import { UserName } from '../../../application/entities/user';
import useAuthenticate from '../../../application/usecases/authenticate';

import styles from './Auth.module.css';

export default function Auth() {
  const [name, setName] = useState<UserName>('');
  const [email, setEmail] = useState<Email>('');
  const [loading, setLoading] = useState(false);

  const { user, authenticate } = useAuthenticate();

  if (user) {
    // return redirect('/');
    return <Navigate to="/" replace />;
  }

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    await authenticate(name, email);
    setLoading(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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

      <button type="submit" disabled={loading}>
        {loading ? 'Trying to login...' : 'Login'}
      </button>
    </form>
  );
}
