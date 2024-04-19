import { mediatorSettings } from 'mediatr-ts';
import InversifyResolver from './inversify.resolver';

const setupMediatr = () => {
  mediatorSettings.resolver = new InversifyResolver();
};

export default setupMediatr;
