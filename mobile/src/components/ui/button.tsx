import {
  Pressable,
  StyleSheet,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Radius, Spacing, type ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export type ButtonProps = Omit<PressableProps, 'children' | 'style'> & {
  title: string;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
};

const variantColors: Record<ButtonVariant, { background?: ThemeColor; text: ThemeColor }> = {
  primary: { background: 'primary', text: 'onPrimary' },
  secondary: { background: 'backgroundSelected', text: 'text' },
  ghost: { text: 'primary' },
  /** Destructive actions, e.g. deleting data. */
  danger: { text: 'error' },
};

export function Button({ title, variant = 'primary', disabled, style, ...rest }: ButtonProps) {
  const theme = useTheme();
  const colors = variantColors[variant];

  return (
    <Pressable
      role="button"
      accessibilityState={{ disabled: !!disabled }}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: colors.background ? theme[colors.background] : 'transparent' },
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      {...rest}>
      <ThemedText themeColor={colors.text} style={styles.label}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 48,
    paddingHorizontal: Spacing.four,
    borderRadius: Radius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 600,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.4,
  },
});
