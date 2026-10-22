import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { LanguagePicker } from '@/components/language-picker';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SegmentedPicker } from '@/components/ui/segmented-picker';
import { Radius, Spacing } from '@/constants/theme';
import { APPEARANCES, useAppearance } from '@/hooks/use-appearance';
import { useProfile } from '@/hooks/use-profile';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
import { useI18n, type Language } from '@/i18n';
import { confirmDestructive } from '@/utils/confirm';

/** Up to two initials, uppercased with the rules of the app language (e.g. Turkish i → İ). */
function getInitials(name: string, language: Language) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toLocaleUpperCase(language))
    .join('');
}

export default function ProfileScreen() {
  const theme = useTheme();
  const { language, t } = useI18n();
  const { profile } = useProfile();
  const { appearance, setAppearance } = useAppearance();
  const { isLoaded, resetProgress } = useProgress();
  const courses = useCourses();

  const lessonsDone = courses.reduce((total, course) => total + course.lessonsCompleted, 0);
  const coursesDone = courses.filter((course) => course.lessonsCompleted === course.lessonsTotal).length;
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
      <Card elevated style={styles.identity}>
        <View style={styles.identityRow}>
          <View style={[styles.avatar, { backgroundColor: theme.primary }]}>
            <ThemedText themeColor="onPrimary" style={styles.initials}>
              {profile ? getInitials(profile.name, language) : '?'}
            </ThemedText>
          </View>
          <View style={styles.identityText}>
            <ThemedText style={styles.name} numberOfLines={1}>
              {profile?.name}
            </ThemedText>
            {profile && (
              <ThemedText type="small" themeColor="textSecondary">
                {t.years[profile.year]}
              </ThemedText>
            )}
          </View>
        </View>
        <Button title={t.profile.edit} variant="secondary" onPress={() => router.push('/edit-profile')} />
      </Card>

      <View style={styles.stats}>
        <Stat value={lessonsDone} label={t.profile.lessonsDone} />
        <Stat value={coursesDone} label={t.profile.coursesDone} />
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>{t.profile.settings}</ThemedText>

        <View style={styles.setting}>
          <ThemedText type="smallBold">{t.profile.language}</ThemedText>
          <LanguagePicker />
        </View>

        <View style={styles.setting}>
          <ThemedText type="smallBold">{t.profile.appearance}</ThemedText>
          <SegmentedPicker
            options={appearanceOptions}
            value={appearance}
            onChange={setAppearance}
            accessibilityLabel={t.profile.appearance}
          />
        </View>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>{t.profile.myProgress}</ThemedText>
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

      <ThemedText type="small" themeColor="textSecondary" style={styles.footnote}>
        {t.profile.localOnly}
      </ThemedText>
    </Screen>
  );
}

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <Card style={styles.stat}>
      <ThemedText style={styles.statValue}>{value}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {label}
      </ThemedText>
    </Card>
  );
}

const styles = StyleSheet.create({
  identity: {
    gap: Spacing.three,
  },
  identityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: Radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 700,
  },
  identityText: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 700,
  },
  stats: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  stat: {
    flex: 1,
    gap: Spacing.one,
  },
  statValue: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 700,
  },
  section: {
    gap: Spacing.three,
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 700,
  },
  setting: {
    gap: Spacing.two,
  },
  footnote: {
    textAlign: 'center',
  },
});
