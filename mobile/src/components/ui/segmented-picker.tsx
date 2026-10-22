import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Spacing } from '@/constants/theme';

type SegmentedPickerProps<T extends string> = {
  options: readonly { value: T; label: string }[];
  value: T | null;
  onChange: (value: T) => void;
  /** Read by screen readers for the whole group. */
  accessibilityLabel: string;
  /** Number of options per row; they wrap onto several rows when there are more. */
  columns?: number;
};

/** A row (or grid) of buttons where exactly one option is selected. */
export function SegmentedPicker<T extends string>({
  options,
  value,
  onChange,
  accessibilityLabel,
  columns = options.length,
}: SegmentedPickerProps<T>) {
  return (
    <View role="radiogroup" accessibilityLabel={accessibilityLabel} style={styles.grid}>
      {options.map((option) => (
        <View key={option.value} style={{ width: `${100 / columns}%` }}>
          <View style={styles.cell}>
            <Button
              title={option.label}
              variant={option.value === value ? 'primary' : 'secondary'}
              role="radio"
              accessibilityState={{ checked: option.value === value }}
              onPress={() => onChange(option.value)}
              style={styles.option}
            />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -Spacing.one,
  },
  cell: {
    padding: Spacing.one,
  },
  option: {
    paddingHorizontal: Spacing.two,
  },
});
