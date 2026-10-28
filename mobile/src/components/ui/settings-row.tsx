import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Icon, type IconName } from '@/components/ui/icon';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type SettingsRowProps = {
  icon: IconName;
  label: string;
  /** Current value, shown greyed at the right, e.g. "Français". */
  value?: string;
  onPress: () => void;
  /** Draws a hairline above the row, to split it from the previous one. */
  divider?: boolean;
  /** `danger`: red label and no chevron, for destructive actions. */
  tone?: 'default' | 'danger';
  disabled?: boolean;
};

/** One line of a settings list: icon tile, label, current value and a chevron. */
export function SettingsRow({
  icon,
  label,
  value,
  onPress,
  divider = false,
  tone = 'default',
  disabled = false,
}: SettingsRowProps) {
  const theme = useTheme();
  const isDanger = tone === 'danger';

  return (
    <Pressable
      role="button"
      accessibilityLabel={value ? `${label}, ${value}` : label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        divider && { borderTopWidth: 1, borderTopColor: theme.border },
        pressed && { backgroundColor: theme.backgroundElement },
        disabled && styles.disabled,
      ]}>
      <View style={[styles.tile, { backgroundColor: theme.backgroundSelected }]}>
        <Icon name={icon} size={16} color={isDanger ? 'error' : 'textSecondary'} />
      </View>
      <ThemedText type="smallBold" themeColor={isDanger ? 'error' : 'text'} style={styles.label}>
        {label}
      </ThemedText>
      {value && (
        <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
          {value}
        </ThemedText>
      )}
      {!isDanger && <Icon name="chevronRight" size={14} color="textSecondary" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    minHeight: 56,
    marginHorizontal: -Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two + 2,
  },
  tile: {
    width: 32,
    height: 32,
    borderRadius: Radius.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    flex: 1,
    fontSize: 15,
  },
  disabled: {
    opacity: 0.4,
  },
});
