/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import { IResolver } from 'mediatr-ts';
import sl from './inversify.config';

export default class InversifyResolver implements IResolver {
  resolve<T>(name: string): T {
    return sl.get(Symbol.for(name));
  }
  add(name: string, instance: Function): void {
    sl.bind(name).to(instance as any);
  }
  remove(name: string): void {
    sl.unbind(name);
  }
  clear(): void {
    sl.unbindAll();
  }
}
