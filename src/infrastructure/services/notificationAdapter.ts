/* eslint-disable no-alert */
import { NotificationService } from '../../application/contracts/ports';

// Use here has the meaning of 'return the service' in order to use it in our business logic
export default function useNotifier(): NotificationService {
  return {
    notify: (message: string) => window.alert(message),
  };
}
