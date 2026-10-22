type ConfirmOptions = {
  title: string;
  message: string;
  confirmLabel: string;
  onConfirm: () => void;
};

/** On web, react-native's Alert does not show buttons, so use the browser's confirm dialog. */
export function confirmDestructive({ title, message, onConfirm }: ConfirmOptions) {
  if (window.confirm(`${title}\n\n${message}`)) {
    onConfirm();
  }
}
