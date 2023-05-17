/* eslint-disable no-alert */
import { NotificationService } from '../../application/ports';

export default function useNotifier(): NotificationService {
  return {
    notify: (message: string) => window.alert(message),
  };
}
