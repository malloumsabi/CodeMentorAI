import { StyleSheet, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Spacing } from '@/constants/theme';
import type { Course } from '@/data/courses';
import { useCourses, useProgress } from '@/hooks/use-progress';
import { confirmDestructive } from '@/utils/confirm';

export default function CoursesScreen() {
  const courses = useCourses();
  const { isLoaded, resetProgress } = useProgress();
  const started = courses.filter((course) => course.lessonsCompleted > 0);
  const notStarted = courses.filter((course) => course.lessonsCompleted === 0);

  function askResetProgress() {
    confirmDestructive({
      title: 'Réinitialiser ta progression ?',
      message: 'Toutes les leçons terminées seront remises à zéro, dans tous les parcours. Cette action est définitive.',
      confirmLabel: 'Réinitialiser',
      onConfirm: resetProgress,
    });
  }

  return (
    <Screen title="Parcours">
      <CourseSection title="En cours" list={started} />
      <CourseSection title="À découvrir" list={notStarted} />

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Ma progression</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {started.length === 0
            ? 'Aucune leçon terminée pour l’instant.'
            : 'Recommence tous les parcours depuis le début.'}
        </ThemedText>
        <Button
          title="Réinitialiser ma progression"
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
