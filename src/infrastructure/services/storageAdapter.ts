import {
  CartStorageService,
  OrdersStorageService,
  UserStorageService,
} from '../../application/ports';
import { useStore } from './store';

export function useUserStorage(): UserStorageService {
  return useStore();
  //   const user: User = {
  //     id: 'unique-id',
  //     email: 'test@user.com',
  //     name: 'thomas',
  //     preferences: [],
  //     allergies: ['chocolate'],
  //   };

  //   return {
  //     user,
  //     updateUser: () => {
  //       // eslint-disable-next-line no-console
  //       console.log('testing the interface');
  //     },
  //   };
}

export function useCartStorage(): CartStorageService {
  return useStore();
}

export function useOrdersStorage(): OrdersStorageService {
  return useStore();
}
