/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/function-component-definition */

// Let the local storage be React.Context and hooks. We create a new context, pass the value to provider, export the provider and access the store via hooks.\

import React, { useContext, useState, PropsWithChildren } from 'react';
import cookies from '../api/fakeData';

const StoreContext = React.createContext<any>({});

export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
