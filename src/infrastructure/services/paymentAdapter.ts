// Services and Adapters has the same meaning
import { PaymentService } from '../../application/ports';
import fakeApi from '../api/fakeApi';

// We explicitly type the return value of usePayment. This way TypeScript will check that the function actually returns an object that contains all the methods declared in the interface.
export default function usePayment(): PaymentService {
  return {
    tryPay(amount: Price) {
      // eslint-disable-next-line no-console
      console.log(amount);

      return fakeApi(true);
    },
  };
}

// interface Animal {
//   name: string;
//   sound(): void;
// }

// class Dog implements Animal {
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//   }

//   sound(): void {
//     console.log(this.name);
//   }
// }
