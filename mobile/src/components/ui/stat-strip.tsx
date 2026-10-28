import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Stat = {
  value: string;
  label: string;
};

/** A row of numbers in one outlined card, split by hairlines. */
export function StatStrip({ stats }: { stats: Stat[] }) {
  const theme = useTheme();

  return (
    <Card variant="outline" style={styles.strip}>
      {stats.map((stat, index) => (
        <View
          key={stat.label}
          style={[styles.stat, index > 0 && { borderLeftWidth: 1, borderLeftColor: theme.border }]}>
          <ThemedText type="stat">{stat.value}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {stat.label}
          </ThemedText>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  strip: {
    flexDirection: 'row',
    gap: 0,
    paddingHorizontal: 0,
  },
  stat: {
    flex: 1,
    gap: Spacing.half,
    paddingHorizontal: Spacing.three,
  },
});
