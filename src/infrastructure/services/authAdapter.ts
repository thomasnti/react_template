import { AuthenticationService } from '../../application/ports';
import { UserName } from '../../domain/user';
import fakeApi from '../api/fakeApi';

export default function useAuth(): AuthenticationService {
  return {
    auth(name: UserName, email: Email) {
      return fakeApi({
        name,
        email,
        id: 'sample-user-id',
        allergies: ['cocoa', 'cherry'],
        preferences: ['marshmallow', 'peanuts'],
      });
    },
  };
}
