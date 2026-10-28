import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ChoiceList } from '@/components/ui/choice-list';
import { MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type OptionSheetProps<T extends string> = {
  visible: boolean;
  title: string;
  options: readonly { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
  onClose: () => void;
};

/** Bottom sheet listing the choices of one setting; picking one closes it. */
export function OptionSheet<T extends string>({
  visible,
  title,
  options,
  value,
  onChange,
  onClose,
}: OptionSheetProps<T>) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Pressable accessibilityLabel={title} onPress={onClose} style={styles.backdrop} />
      <View
        style={[
          styles.sheet,
          {
            backgroundColor: theme.background,
            borderColor: theme.border,
            paddingBottom: insets.bottom + Spacing.three,
          },
        ]}>
        <View style={[styles.handle, { backgroundColor: theme.border }]} />
        <ThemedText type="section" role="heading" style={styles.title}>
          {title}
        </ThemedText>
        <ChoiceList
          options={options}
          value={value}
          onChange={(next) => {
            onChange(next);
            onClose();
          }}
          accessibilityLabel={title}
          inset={Spacing.four}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  sheet: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.two,
    borderTopLeftRadius: Radius.large,
    borderTopRightRadius: Radius.large,
    borderWidth: 1,
    borderBottomWidth: 0,
  },
  handle: {
    alignSelf: 'center',
    width: 36,
    height: 4,
    borderRadius: Radius.full,
    marginBottom: Spacing.three,
  },
  title: {
    paddingBottom: Spacing.two,
  },
});
