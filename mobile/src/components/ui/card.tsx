import { StyleSheet, View, type ViewProps } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type CardProps = ViewProps & {
  /** `filled`: raised surface for the main content; `outline`: border only, for secondary content. */
  variant?: 'filled' | 'outline';
};

/** No shadows: surfaces are told apart by a slightly different background and a 1px border. */
export function Card({ variant = 'filled', style, ...rest }: CardProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: variant === 'filled' ? theme.backgroundElement : 'transparent',
          borderColor: theme.border,
        },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    padding: Spacing.three,
    borderRadius: Radius.medium + 4,
    borderWidth: 1,
    gap: Spacing.two,
  },
});
