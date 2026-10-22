import { Alert } from 'react-native';

type ConfirmOptions = {
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
};

/** Native confirmation dialog with a destructive confirm button. See `confirm.web.ts` for the web version. */
export function confirmDestructive({ title, message, confirmLabel, cancelLabel, onConfirm }: ConfirmOptions) {
  Alert.alert(title, message, [
    { text: cancelLabel, style: 'cancel' },
    { text: confirmLabel, style: 'destructive', onPress: onConfirm },
  ]);
}
