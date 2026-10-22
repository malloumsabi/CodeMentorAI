import { StyleSheet, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { CourseRow } from '@/components/home/course-row';
import { Screen } from '@/components/screen';
import { Label } from '@/components/ui/label';
import { Spacing } from '@/constants/theme';
import { useCourses } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';

/** Every course is open to every student, whatever their year. */
export default function CoursesScreen() {
  const courses = useCourses();
  const { t } = useI18n();
  const started = courses.filter((course) => course.lessonsCompleted > 0);
  const notStarted = courses.filter((course) => course.lessonsCompleted === 0);
  const lessonsTotal = courses.reduce((total, course) => total + course.lessonsTotal, 0);

  return (
    <Screen eyebrow={t.courses.summary(courses.length, lessonsTotal)} title={t.courses.title}>
      {started.length > 0 && (
        <View style={styles.section}>
          <Label>{t.courses.inProgress}</Label>
          {started.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </View>
      )}

      {notStarted.length > 0 && (
        <View>
          <Label style={styles.listLabel}>{t.courses.toDiscover}</Label>
          {notStarted.map((course) => (
            <CourseRow key={course.id} course={course} />
          ))}
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: Spacing.two + 2,
  },
  listLabel: {
    paddingBottom: Spacing.two,
  },
});
