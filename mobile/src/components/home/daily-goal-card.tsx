import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { Fonts, Spacing } from '@/constants/theme';
import { useDailyGoal } from '@/hooks/use-daily-goal';
import { useProgress } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import { toDayKey } from '@/utils/activity';

/** Lessons done today against the daily goal, one segment per lesson of the goal. */
export function DailyGoalCard() {
  const theme = useTheme();
  const { t } = useI18n();
  const { activity } = useProgress();
  const { dailyGoal } = useDailyGoal();
  const doneToday = activity[toDayKey(new Date())] ?? 0;
  const isReached = doneToday >= dailyGoal;

  return (
    <Card variant="outline" style={styles.card}>
      <View style={styles.header}>
        <Label>{t.dailyGoal.title}</Label>
        <ThemedText type="small" themeColor={isReached ? 'success' : 'textSecondary'} style={styles.count}>
          {Math.min(doneToday, dailyGoal)}/{dailyGoal}
        </ThemedText>
      </View>
      <View
        accessibilityRole="progressbar"
        accessibilityLabel={t.dailyGoal.a11y(doneToday, dailyGoal)}
        accessibilityValue={{ min: 0, max: dailyGoal, now: Math.min(doneToday, dailyGoal) }}
        style={styles.track}>
        {Array.from({ length: dailyGoal }, (_, index) => (
          <View
            key={index}
            style={[
              styles.segment,
              { backgroundColor: index < doneToday ? theme[isReached ? 'success' : 'primary'] : theme.backgroundSelected },
            ]}
          />
        ))}
      </View>
      <View style={styles.status}>
        {isReached && <Icon name="check" size={14} color="success" />}
        <ThemedText type="small" themeColor={isReached ? 'success' : 'textSecondary'}>
          {isReached ? t.dailyGoal.reached : t.dailyGoal.remaining(dailyGoal - doneToday)}
        </ThemedText>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.two + 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  count: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
  track: {
    flexDirection: 'row',
    gap: Spacing.one,
  },
  segment: {
    flex: 1,
    height: 6,
    borderRadius: 3,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
});
