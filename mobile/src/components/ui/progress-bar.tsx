import { StyleSheet, View } from 'react-native';

import { Radius, type ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ProgressBarProps = {
  /** Between 0 and 1. Values outside this range are clamped. */
  progress: number;
  color?: ThemeColor;
  accessibilityLabel?: string;
};

export function ProgressBar({ progress, color = 'primary', accessibilityLabel }: ProgressBarProps) {
  const theme = useTheme();
  const percent = Math.round(Math.min(Math.max(progress, 0), 1) * 100);

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min: 0, max: 100, now: percent }}
      style={[styles.track, { backgroundColor: theme.backgroundSelected }]}>
      <View style={[styles.fill, { width: `${percent}%`, backgroundColor: theme[color] }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: Radius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.full,
  },
});
