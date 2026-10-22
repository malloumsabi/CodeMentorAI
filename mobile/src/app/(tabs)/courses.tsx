import { StyleSheet, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import type { Course } from '@/data/courses';
import { useCourses } from '@/hooks/use-progress';

export default function CoursesScreen() {
  const courses = useCourses();
  const started = courses.filter((course) => course.lessonsCompleted > 0);
  const notStarted = courses.filter((course) => course.lessonsCompleted === 0);

  return (
    <Screen title="Parcours">
      <CourseSection title="En cours" list={started} />
      <CourseSection title="À découvrir" list={notStarted} />
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
