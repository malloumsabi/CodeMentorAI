import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Icon } from '@/components/ui/icon';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ChoiceListProps<T extends string> = {
  options: readonly { value: T; label: string }[];
  value: T | null;
  onChange: (value: T) => void;
  /** Read by screen readers for the whole group. */
  accessibilityLabel: string;
  /** Room on the sides of each row, so the pressed background reaches the container's edges. */
  inset?: number;
};

/** One row per option, split by hairlines; the selected one is bold with a check mark. */
export function ChoiceList<T extends string>({
  options,
  value,
  onChange,
  accessibilityLabel,
  inset = Spacing.three,
}: ChoiceListProps<T>) {
  const theme = useTheme();

  return (
    <View role="radiogroup" accessibilityLabel={accessibilityLabel}>
      {options.map((option, index) => {
        const isSelected = option.value === value;
        return (
          <Pressable
            key={option.value}
            role="radio"
            accessibilityState={{ checked: isSelected }}
            onPress={() => onChange(option.value)}
            style={({ pressed }) => [
              styles.option,
              { marginHorizontal: -inset, paddingHorizontal: inset },
              index > 0 && { borderTopWidth: 1, borderTopColor: theme.border },
              pressed && { backgroundColor: theme.backgroundElement },
            ]}>
            <ThemedText type={isSelected ? 'smallBold' : 'small'} style={styles.label}>
              {option.label}
            </ThemedText>
            {isSelected && <Icon name="check" size={18} color="primary" />}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 52,
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
});
