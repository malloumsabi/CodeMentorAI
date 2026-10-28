import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { LanguagePicker } from '@/components/language-picker';
import { Avatar } from '@/components/profile/avatar';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { SegmentedPicker } from '@/components/ui/segmented-picker';
import { StatStrip } from '@/components/ui/stat-strip';
import { Fonts, Spacing } from '@/constants/theme';
import { APPEARANCES, useAppearance } from '@/hooks/use-appearance';
import { useProfile } from '@/hooks/use-profile';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';
import { confirmDestructive } from '@/utils/confirm';

export default function ProfileScreen() {
  const { t } = useI18n();
  const theme = useTheme();
  const { profile } = useProfile();
  const { appearance, setAppearance } = useAppearance();
  const { isLoaded, resetProgress } = useProgress();
  const courses = useCourses();

  const lessonsDone = courses.reduce((total, course) => total + course.lessonsCompleted, 0);
  const coursesDone = courses.filter((course) => course.lessonsCompleted === course.lessonsTotal).length;
  const lessonsTotal = courses.reduce((total, course) => total + course.lessonsTotal, 0);
  const overallPercent = lessonsTotal > 0 ? Math.round((lessonsDone / lessonsTotal) * 100) : 0;
  const stats = [
    { value: String(lessonsDone), label: t.profile.lessonsDone },
    { value: String(coursesDone), label: t.profile.coursesDone },
    { value: `${overallPercent} %`, label: t.profile.overallProgress },
  ];
  const appearanceOptions = APPEARANCES.map((value) => ({ value, label: t.profile.appearances[value] }));

  function askResetProgress() {
    confirmDestructive({
      title: t.profile.resetConfirmTitle,
      message: t.profile.resetConfirmMessage,
      confirmLabel: t.profile.resetConfirmLabel,
      cancelLabel: t.common.cancel,
      onConfirm: resetProgress,
    });
  }

  return (
    <Screen title={t.profile.title}>
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

      <View style={styles.section}>
        <Label>{t.profile.settings}</Label>
        <Card variant="outline" style={styles.group}>
          <View style={styles.setting}>
            <ThemedText type="smallBold">{t.profile.language}</ThemedText>
            <LanguagePicker />
          </View>
          <View style={[styles.setting, styles.divider, { borderTopColor: theme.border }]}>
            <ThemedText type="smallBold">{t.profile.appearance}</ThemedText>
            <SegmentedPicker
              options={appearanceOptions}
              value={appearance}
              onChange={setAppearance}
              accessibilityLabel={t.profile.appearance}
            />
          </View>
        </Card>
      </View>

      <View style={styles.section}>
        <Label>{t.profile.myProgress}</Label>
        <Card variant="outline" style={styles.group}>
          <View style={styles.setting}>
            <ThemedText type="small" themeColor="textSecondary">
              {lessonsDone === 0 ? t.profile.noProgress : t.profile.resetHint}
            </ThemedText>
            <Button
              title={t.profile.resetButton}
              variant="danger"
              disabled={!isLoaded || lessonsDone === 0}
              onPress={askResetProgress}
            />
          </View>
        </Card>
      </View>

      <ThemedText type="small" themeColor="textSecondary" style={styles.footnote}>
        {t.profile.localOnly}
      </ThemedText>
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
  section: {
    gap: Spacing.two,
  },
  group: {
    paddingVertical: 0,
    gap: 0,
  },
  setting: {
    gap: Spacing.two,
    paddingVertical: Spacing.three,
  },
  divider: {
    borderTopWidth: 1,
    marginHorizontal: -Spacing.three,
    paddingHorizontal: Spacing.three,
  },
  footnote: {
    textAlign: 'center',
  },
});
