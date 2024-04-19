/* eslint-disable no-alert */
import { INotificationService } from '../../application/contracts/contracts';

export default class NotificationService implements INotificationService {
  notify(message: string): void {
    window.alert(message);
  }
}
