// CONTRACTS , INTERFACES

import { Cart } from '../entities/cart';
import { Order } from '../entities/order';
import { User, UserName } from '../entities/user';

export interface IPaymentService {
  tryPay(amount: Price): Promise<boolean>;
}

export interface INotificationService {
  notify(message: string): void;
}

export interface IAuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface IUserStorageService {
  user?: User;
  updateUser(user: User): void;
}

export interface ICartStorageService {
  cart: Cart;
  updateCart(cart: Cart): void;
  emptyCart(): void;
}

export interface IOrdersStorageService {
  orders: Order[];
  updateOrders(orders: Order[]): void;
}
