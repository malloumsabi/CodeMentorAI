import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Avatar } from '@/components/profile/avatar';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IconButton } from '@/components/ui/icon-button';
import { StatStrip } from '@/components/ui/stat-strip';
import { Fonts, Spacing } from '@/constants/theme';
import { useProfile } from '@/hooks/use-profile';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import { getStreak } from '@/utils/activity';

export default function ProfileScreen() {
  const { t } = useI18n();
  const theme = useTheme();
  const { profile } = useProfile();
  const courses = useCourses();
  const { activity } = useProgress();

  const lessonsDone = courses.reduce((total, course) => total + course.lessonsCompleted, 0);
  const coursesDone = courses.filter((course) => course.lessonsCompleted === course.lessonsTotal).length;
  const stats = [
    { value: String(lessonsDone), label: t.profile.lessonsDone },
    { value: String(coursesDone), label: t.profile.coursesDone },
    { value: String(getStreak(activity)), label: t.profile.streak },
  ];

  return (
    <Screen
      title={t.profile.title}
      accessory={
        <IconButton
          icon="settings"
          accessibilityLabel={t.profile.settings}
          onPress={() => router.push('/settings')}
        />
      }>
      <Card style={[styles.identity, { backgroundColor: theme.primarySoft, borderColor: theme.primaryBorder }]}>
        <Avatar name={profile?.name ?? ''} size={64} tone="primary" />
        <View style={styles.identityText}>
          <ThemedText style={styles.name} numberOfLines={1}>
            {profile?.name}
          </ThemedText>
          {profile && (
            <ThemedText type="small" themeColor="textSecondary" style={styles.mono}>
              {t.years[profile.year]}
            </ThemedText>
          )}
        </View>
        <Button title={t.profile.edit} variant="secondary" onPress={() => router.push('/edit-profile')} />
      </Card>

      <StatStrip stats={stats} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  identity: {
    alignItems: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.four,
  },
  identityText: {
    alignItems: 'center',
    gap: Spacing.half,
  },
  mono: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
  name: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 700,
  },
});
