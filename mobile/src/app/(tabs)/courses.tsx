import { StyleSheet, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { LanguagePicker } from '@/components/language-picker';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Spacing } from '@/constants/theme';
import type { Course } from '@/data/courses';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';
import { confirmDestructive } from '@/utils/confirm';

export default function CoursesScreen() {
  const courses = useCourses();
  const { isLoaded, resetProgress } = useProgress();
  const { t } = useI18n();
  const started = courses.filter((course) => course.lessonsCompleted > 0);
  const notStarted = courses.filter((course) => course.lessonsCompleted === 0);

  function askResetProgress() {
    confirmDestructive({
      title: t.courses.resetConfirmTitle,
      message: t.courses.resetConfirmMessage,
      confirmLabel: t.courses.resetConfirmLabel,
      cancelLabel: t.common.cancel,
      onConfirm: resetProgress,
    });
  }

  return (
    <Screen title={t.courses.title}>
      <CourseSection title={t.courses.inProgress} list={started} />
      <CourseSection title={t.courses.toDiscover} list={notStarted} />

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>{t.courses.language}</ThemedText>
        <LanguagePicker />
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>{t.courses.myProgress}</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {started.length === 0 ? t.courses.noProgress : t.courses.resetHint}
        </ThemedText>
        <Button
          title={t.courses.resetButton}
          variant="danger"
          disabled={!isLoaded || started.length === 0}
          onPress={askResetProgress}
        />
      </View>
    </Screen>
  );
}

function CourseSection({ title, list }: { title: string; list: Course[] }) {
  if (list.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
      {list.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.three,
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 700,
  },
});
