/* eslint-disable max-classes-per-file */
import { IRequest, IRequestHandler, requestHandler } from 'mediatr-ts';
import { UserName } from '../entities/user';
import {
  IAuthenticationService,
  IUserStorageService,
} from '../contracts/contracts';

class Authenticate implements IRequest<void> {
  name: UserName;
  email: string; // to eixa Email (type)

  constructor(name: UserName, email: string) {
    this.name = name;
    this.email = email;
  }
}

@requestHandler(Authenticate)
class AuthenticateHandler implements IRequestHandler<Authenticate, void> {
  private authenticationService: IAuthenticationService;
  private userStorageService: IUserStorageService;

  constructor(
    authenticationService: IAuthenticationService,
    userStorageService: IUserStorageService
  ) {
    this.authenticationService = authenticationService;
    this.userStorageService = userStorageService;
  }

  async handle(value: Authenticate): Promise<void> {
    const user = await this.authenticationService.auth(value.name, value.email);

    this.userStorageService.updateUser(user);
  }
}
