import { Product } from '../../../application/entities/product';
import { useStore } from '../../../infrastructure/services/store';
import Cookie from '../Cookie/Cookie';

export default function Front() {
  const { cookies } = useStore();

  return (
    <main>
      <h1>Cookies</h1>
      <ul>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
}
