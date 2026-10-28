import { StyleSheet, View } from 'react-native';

import type { Course } from '@/data/courses';
import { useTheme } from '@/hooks/use-theme';

type WeekTrackProps = {
  course: Course;
  /** The lesson to highlight as the current one. */
  currentLessonId?: string;
  accessibilityLabel?: string;
};

/** One segment per lesson: filled when done, outlined for the current one, empty otherwise. */
export function WeekTrack({ course, currentLessonId, accessibilityLabel }: WeekTrackProps) {
  const theme = useTheme();
  const percent = course.lessonsTotal === 0 ? 0 : Math.round((course.lessonsCompleted / course.lessonsTotal) * 100);

  return (
    <View
      accessibilityRole="progressbar"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min: 0, max: 100, now: percent }}
      style={styles.track}>
      {course.lessons.map((lesson) => {
        const isDone = course.completedLessonIds.includes(lesson.id);
        const isCurrent = lesson.id === currentLessonId;
        return (
          <View
            key={lesson.id}
            style={[
              styles.segment,
              {
                backgroundColor: isDone ? theme.primary : theme.backgroundSelected,
                borderColor: isCurrent ? theme.primary : 'transparent',
              },
            ]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    gap: 3,
  },
  segment: {
    flex: 1,
    height: 8,
    borderRadius: 2,
    borderWidth: 1.5,
  },
});
