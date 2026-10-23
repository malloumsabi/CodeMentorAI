import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Spacing } from '@/constants/theme';
import type { Course } from '@/data/courses';
import { useI18n } from '@/i18n';

type LessonNavigationProps = {
  course: Course;
  lessonIndex: number;
};

/** Previous / next lesson buttons, to move through a course (e.g. to revise) without going back to the list. */
export function LessonNavigation({ course, lessonIndex }: LessonNavigationProps) {
  const { t } = useI18n();
  const previous = course.lessons[lessonIndex - 1];
  const next = course.lessons[lessonIndex + 1];

  const labelOf = (index: number) => {
    const week = course.lessons[index].week;
    return week ? t.lesson.weekLabel(week) : t.lesson.lessonLabel(index + 1);
  };

  // Replace instead of push, so "back" still returns to the course.
  const open = (lessonId: string) =>
    router.replace({ pathname: '/lesson/[courseId]/[lessonId]', params: { courseId: course.id, lessonId } });

  return (
    <View style={styles.row}>
      {previous ? (
        <Button
          title={`‹ ${labelOf(lessonIndex - 1)}`}
          accessibilityLabel={`${t.lesson.previous}, ${labelOf(lessonIndex - 1)}`}
          variant="ghost"
          style={styles.button}
          onPress={() => open(previous.id)}
        />
      ) : (
        <View style={styles.button} />
      )}
      {next ? (
        <Button
          title={`${labelOf(lessonIndex + 1)} ›`}
          accessibilityLabel={`${t.lesson.next}, ${labelOf(lessonIndex + 1)}`}
          variant="ghost"
          style={styles.button}
          onPress={() => open(next.id)}
        />
      ) : (
        <View style={styles.button} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  button: {
    flex: 1,
    paddingHorizontal: Spacing.two,
  },
});
