//  This is the only place in which there is some coupling. In the rest of your application your classes should be free of references to other classes.
import { Container } from 'inversify';
import { Mediator } from 'mediatr-ts';
import TYPES from './types';
import AuthenticationService from '../infrastructure/services/authenticationService';
import { IAuthenticationService } from '../application/contracts/contracts';

// Our service locator
const sl = new Container();
const sl2 = new Container({ autoBindInjectable: true });

// Register implementations
sl.bind<IAuthenticationService>(TYPES.AuthenticationService)
  .to(AuthenticationService)
  .inSingletonScope();

sl.bind<Mediator>(TYPES.Mediator).to(Mediator);

export default sl;
