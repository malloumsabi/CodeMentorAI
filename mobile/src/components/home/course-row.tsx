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
  /** Draws a hairline above the row, to split it from the previous one. */
  divider?: boolean;
};

/** Compact list row for a course; meant to be grouped in a `CourseList`. */
export function CourseRow({ course, showProgress = false, divider = false }: CourseRowProps) {
  const theme = useTheme();
  const { t } = useI18n();
  const level = t.levels[course.level];
  const isFinished = course.lessonsCompleted === course.lessonsTotal;

  return (
    <Pressable
      role="button"
      accessibilityLabel={t.courseCard.accessibilityLabel(course.title, level)}
      onPress={() => router.push({ pathname: '/course/[courseId]', params: { courseId: course.id } })}
      style={({ pressed }) => [
        styles.row,
        divider && { borderTopWidth: 1, borderTopColor: theme.border },
        pressed && { backgroundColor: theme.backgroundElement },
      ]}>
      <CourseBadge label={course.badge} />
      <View style={styles.body}>
        <ThemedText type="smallBold" style={styles.title} numberOfLines={1}>
          {course.title}
        </ThemedText>
        {showProgress ? (
          <View style={styles.progress}>
            <View style={styles.bar}>
              <ProgressBar
                progress={getCourseProgress(course)}
                color={isFinished ? 'success' : 'primary'}
                accessibilityLabel={t.common.progressOf(course.title)}
              />
            </View>
            <ThemedText type="small" themeColor="textSecondary" style={styles.count}>
              {course.lessonsCompleted}/{course.lessonsTotal}
            </ThemedText>
          </View>
        ) : (
          <ThemedText type="small" themeColor="textSecondary" numberOfLines={1}>
            {t.course.summary(level, course.lessonsTotal)}
          </ThemedText>
        )}
      </View>
      <Icon name="chevronRight" size={14} color="textSecondary" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    minHeight: 64,
    marginHorizontal: -Spacing.three,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.three - 4,
  },
  body: {
    flex: 1,
    gap: Spacing.one,
  },
  title: {
    fontSize: 15,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two + 2,
  },
  bar: {
    flex: 1,
  },
  count: {
    fontFamily: Fonts.mono,
    fontSize: 12,
    minWidth: 36,
    textAlign: 'right',
  },
});
