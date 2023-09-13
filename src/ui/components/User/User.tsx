import { Navigate } from 'react-router-dom';

import { useUserStorage } from '../../../infrastructure/services/storageAdapter';
import Buy from '../Buy/Buy';
import Profile from '../Profile/Profile';

export default function User(): JSX.Element {
  const { user } = useUserStorage();

  // if (!user) return redirect('/auth');
  if (!user) return <Navigate to="/auth" replace />;

  return (
    <main>
      <Profile />
      <Buy />
    </main>
  );
}
