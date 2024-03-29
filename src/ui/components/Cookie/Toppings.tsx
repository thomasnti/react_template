import { Product, ingredients } from '../../../application/entities/product';
import { hasAllergy, hasPreference } from '../../../application/entities/user';
import { useUserStorage } from '../../../infrastructure/services/storageAdapter';

type ToppingsProps = {
  cookie: Product;
};

export default function Toppings({ cookie }: ToppingsProps) {
  const { user } = useUserStorage();

  return (
    <ul>
      {cookie.toppings.map((topping) => (
        <li key={topping}>
          {ingredients[topping]}{' '}
          {!!user && hasPreference(user, topping) && <>👍</>}{' '}
          {!!user && hasAllergy(user, topping) && <>⚠️</>}
        </li>
      ))}
    </ul>
  );
}
