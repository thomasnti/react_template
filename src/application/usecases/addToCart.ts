import useNotifier from '../../infrastructure/services/notificationAdapter';
import { useCartStorage } from '../../infrastructure/services/storageAdapter';
import { CartStorageService, NotificationService } from '../contracts/ports';
import { addProduct } from '../entities/cart';
import { Product } from '../entities/product';
import { User, hasAllergy } from '../entities/user';

export default function useAddToCart() {
  const cartStorage: CartStorageService = useCartStorage();
  const notifier: NotificationService = useNotifier();

  function addToCart(user: User, product: Product): void {
    const warning = 'This cookie is dangerous to your health! 😱';
    const isDangerous = product.toppings.some((ingredient) =>
      hasAllergy(user, ingredient)
    );
    if (isDangerous) {
      notifier.notify(warning);
      return;
    }

    const { cart } = cartStorage;
    const updatedCart = addProduct(cart, product);
    cartStorage.updateCart(updatedCart); // sets the new cart to state
  }

  return { addToCart };
}
