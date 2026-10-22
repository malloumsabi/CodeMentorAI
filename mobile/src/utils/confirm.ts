import { Alert } from 'react-native';

type ConfirmOptions = {
  title: string;
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
};

/** Native confirmation dialog with a destructive confirm button. See `confirm.web.ts` for the web version. */
export function confirmDestructive({ title, message, confirmLabel, onConfirm }: ConfirmOptions) {
  Alert.alert(title, message, [
    { text: 'Annuler', style: 'cancel' },
    { text: confirmLabel, style: 'destructive', onPress: onConfirm },
  ]);
}
