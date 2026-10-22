import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { LanguagePicker } from '@/components/language-picker';
import { Avatar } from '@/components/profile/avatar';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SegmentedPicker } from '@/components/ui/segmented-picker';
import { Spacing } from '@/constants/theme';
import { APPEARANCES, useAppearance } from '@/hooks/use-appearance';
import { useProfile } from '@/hooks/use-profile';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';
import { confirmDestructive } from '@/utils/confirm';

export default function ProfileScreen() {
  const { t } = useI18n();
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
      <Card style={styles.identity}>
        <View style={styles.identityRow}>
          <Avatar name={profile?.name ?? ''} size={56} tone="primary" />
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
        <ThemedText type="section">{t.profile.settings}</ThemedText>

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
        <ThemedText type="section">{t.profile.myProgress}</ThemedText>
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
    <Card variant="outline" style={styles.stat}>
      <ThemedText type="stat">{value}</ThemedText>
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
  section: {
    gap: Spacing.three,
  },
  setting: {
    gap: Spacing.two,
  },
  footnote: {
    textAlign: 'center',
  },
});
