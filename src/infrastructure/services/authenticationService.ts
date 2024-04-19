import { injectable } from 'inversify';
import { IAuthenticationService } from '../../application/contracts/contracts';
import { User } from '../../application/entities/user';
import fakeApi from '../api/fakeApi';

@injectable()
export default class AuthenticationService implements IAuthenticationService {
  auth(name: string, email: string): Promise<User> {
    return fakeApi({
      name,
      email,
      id: 'sample-user-id',
      allergies: ['cocoa', 'cherry'],
      preferences: ['marshmallow', 'peanuts'],
    });
  }
}
