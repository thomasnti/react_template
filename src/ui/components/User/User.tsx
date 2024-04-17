import { Navigate } from 'react-router-dom';

import { useUserStorage } from '../../../infrastructure/services/storageAdapter';
import Buy from '../Buy/Buy';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';

export default function User(): JSX.Element {
  const { user } = useUserStorage();

  // if (!user) return redirect('/auth');
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
}
