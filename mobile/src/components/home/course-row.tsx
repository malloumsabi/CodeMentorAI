import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { CourseBadge } from '@/components/home/course-badge';
import { ThemedText } from '@/components/themed-text';
import { Icon } from '@/components/ui/icon';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Fonts, Spacing } from '@/constants/theme';
import { getCourseProgress, type Course } from '@/data/courses';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

type CourseRowProps = {
  course: Course;
  /** Shows a progress bar and counter instead of the level line. */
  showProgress?: boolean;
};

/** Compact list row for a course, separated from the previous one by a hairline. */
export function CourseRow({ course, showProgress = false }: CourseRowProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const level = t.levels[course.level];
  const isFinished = course.lessonsCompleted === course.lessonsTotal;

  return (
    <Pressable
      role="button"
      accessibilityLabel={t.courseCard.accessibilityLabel(course.title, level)}
      onPress={() => router.push({ pathname: '/course/[courseId]', params: { courseId: course.id } })}
      style={({ pressed }) => [styles.row, { borderTopColor: theme.border }, pressed && styles.pressed]}>
      <CourseBadge label={course.badge} />
      <View style={styles.body}>
        <View style={styles.titleLine}>
          <ThemedText type="smallBold" style={styles.title} numberOfLines={1}>
            {course.title}
          </ThemedText>
          {showProgress && (
            <ThemedText type="small" themeColor="textSecondary" style={styles.count}>
              {course.lessonsCompleted}/{course.lessonsTotal}
            </ThemedText>
          )}
        </View>
        {showProgress ? (
          <ProgressBar
            progress={getCourseProgress(course)}
            color={isFinished ? 'success' : 'primary'}
            accessibilityLabel={t.common.progressOf(course.title)}
          />
        ) : (
          <ThemedText type="small" themeColor="textSecondary">
            {t.course.summary(level, course.lessonsTotal)}
          </ThemedText>
        )}
      </View>
      {!showProgress && <Icon name="chevronRight" size={16} color="textSecondary" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    minHeight: 64,
    paddingVertical: Spacing.two + 2,
    borderTopWidth: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  body: {
    flex: 1,
    gap: Spacing.two - 2,
  },
  titleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  title: {
    flex: 1,
    fontSize: 15,
  },
  count: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
});
