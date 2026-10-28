import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Icon } from '@/components/ui/icon';
import { Fonts, Radius, Spacing } from '@/constants/theme';
import { useProgress } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import { getStreak, toDayKey } from '@/utils/activity';

/** Days in a row with a lesson; the flame lights up once a lesson is done today. */
export function StreakBadge() {
  const theme = useTheme();
  const { t } = useI18n();
  const { activity } = useProgress();
  const streak = getStreak(activity);
  const isDoneToday = (activity[toDayKey(new Date())] ?? 0) > 0;

  return (
    <View
      accessible
      accessibilityLabel={t.profile.streakA11y(streak)}
      style={[styles.badge, { backgroundColor: theme.backgroundElement, borderColor: theme.border }]}>
      <Icon name="flame" size={16} color={isDoneToday ? 'warning' : 'textSecondary'} />
      <ThemedText type="smallBold" themeColor={isDoneToday ? 'text' : 'textSecondary'} style={styles.count}>
        {streak}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    height: 36,
    paddingHorizontal: Spacing.two + 2,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  count: {
    fontFamily: Fonts.mono,
  },
});
