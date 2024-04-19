/* eslint-disable no-console */
import { IPaymentService } from '../../application/contracts/contracts';
import fakeApi from '../api/fakeApi';

export default class PaymentService implements IPaymentService {
  tryPay(amount: number): Promise<boolean> {
    console.log(amount);

    return fakeApi(true);
  }
}
