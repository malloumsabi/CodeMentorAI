import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { OptionSheet } from '@/components/ui/option-sheet';
import { SettingsRow } from '@/components/ui/settings-row';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { APPEARANCES, useAppearance } from '@/hooks/use-appearance';
import { DAILY_GOALS, useDailyGoal } from '@/hooks/use-daily-goal';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { LANGUAGE_NAMES, LANGUAGES, useI18n } from '@/i18n';
import { confirmDestructive } from '@/utils/confirm';

/** Modal opened from the gear button of the Profile tab: language, appearance and progress reset. */
export default function SettingsScreen() {
  const { t, language, setLanguage } = useI18n();
  const [openSheet, setOpenSheet] = useState<'language' | 'appearance' | 'dailyGoal' | null>(null);
  const { appearance, setAppearance } = useAppearance();
  const { isLoaded, resetProgress } = useProgress();
  const { dailyGoal, setDailyGoal } = useDailyGoal();
  const courses = useCourses();

  const lessonsDone = courses.reduce((total, course) => total + course.lessonsCompleted, 0);
  const appearanceOptions = APPEARANCES.map((value) => ({ value, label: t.profile.appearances[value] }));
  // The sheet works with string values; the goal is turned back into a number on change.
  const dailyGoalOptions = DAILY_GOALS.map((goal) => ({ value: String(goal), label: t.dailyGoal.option(goal) }));
  const languageOptions = LANGUAGES.map((code) => ({ value: code, label: LANGUAGE_NAMES[code] }));

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
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <ThemedText type="heading" role="heading" style={styles.title}>
              {t.profile.settings}
            </ThemedText>
            <Button title={t.common.close} variant="ghost" onPress={() => router.back()} />
          </View>

          <View style={styles.section}>
            <Label>{t.profile.preferences}</Label>
            <Card variant="outline" style={styles.group}>
              <SettingsRow
                icon="language"
                label={t.profile.language}
                value={LANGUAGE_NAMES[language]}
                onPress={() => setOpenSheet('language')}
              />
              <SettingsRow
                icon="appearance"
                label={t.profile.appearance}
                value={t.profile.appearances[appearance]}
                onPress={() => setOpenSheet('appearance')}
                divider
              />
              <SettingsRow
                icon="target"
                label={t.dailyGoal.title}
                value={t.dailyGoal.option(dailyGoal)}
                onPress={() => setOpenSheet('dailyGoal')}
                divider
              />
            </Card>
          </View>

          <View style={styles.section}>
            <Label>{t.profile.myProgress}</Label>
            <Card variant="outline" style={styles.group}>
              <SettingsRow
                icon="reset"
                label={t.profile.resetButton}
                tone="danger"
                disabled={!isLoaded || lessonsDone === 0}
                onPress={askResetProgress}
              />
            </Card>
            <ThemedText type="small" themeColor="textSecondary">
              {lessonsDone === 0 ? t.profile.noProgress : t.profile.resetHint}
            </ThemedText>
          </View>

          <ThemedText type="small" themeColor="textSecondary" style={styles.footnote}>
            {t.profile.localOnly}
          </ThemedText>
        </ScrollView>

        <OptionSheet
          visible={openSheet === 'language'}
          title={t.profile.language}
          options={languageOptions}
          value={language}
          onChange={setLanguage}
          onClose={() => setOpenSheet(null)}
        />
        <OptionSheet
          visible={openSheet === 'appearance'}
          title={t.profile.appearance}
          options={appearanceOptions}
          value={appearance}
          onChange={setAppearance}
          onClose={() => setOpenSheet(null)}
        />
        <OptionSheet
          visible={openSheet === 'dailyGoal'}
          title={t.dailyGoal.title}
          options={dailyGoalOptions}
          value={String(dailyGoal)}
          onChange={(value) => setDailyGoal(Number(value) as (typeof DAILY_GOALS)[number])}
          onClose={() => setOpenSheet(null)}
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    padding: Spacing.four,
    gap: Spacing.four,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  title: {
    flex: 1,
  },
  section: {
    gap: Spacing.two,
  },
  group: {
    paddingVertical: 0,
    gap: 0,
  },
  footnote: {
    textAlign: 'center',
  },
});
