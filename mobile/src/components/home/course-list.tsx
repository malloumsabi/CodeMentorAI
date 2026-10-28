import { StyleSheet } from 'react-native';

import { CourseRow } from '@/components/home/course-row';
import { Card } from '@/components/ui/card';
import type { Course } from '@/data/courses';

type CourseListProps = {
  courses: Course[];
  /** Shows progress on the started courses only. */
  showProgress?: boolean;
};

/** Grouped list: the rows share one outlined card, split by hairlines. */
export function CourseList({ courses, showProgress = false }: CourseListProps) {
  return (
    <Card variant="outline" style={styles.list}>
      {courses.map((course, index) => (
        <CourseRow
          key={course.id}
          course={course}
          showProgress={showProgress && course.lessonsCompleted > 0}
          divider={index > 0}
        />
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  list: {
    paddingVertical: 0,
    gap: 0,
    overflow: 'hidden',
  },
});
