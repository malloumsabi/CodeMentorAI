import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { CourseBadge } from '@/components/home/course-badge';
import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Fonts, Spacing } from '@/constants/theme';
import { getCourseProgress, type Course } from '@/data/courses';
import { useI18n } from '@/i18n';

type CourseCardProps = {
  course: Course;
};

/** Card for a course in progress: title, level and a progress bar with its counter. */
export function CourseCard({ course }: CourseCardProps) {
  const { t } = useI18n();
  const level = t.levels[course.level];
  const isFinished = course.lessonsCompleted === course.lessonsTotal;

  return (
    <Pressable
      role="button"
      accessibilityLabel={t.courseCard.accessibilityLabel(course.title, level)}
      onPress={() => router.push({ pathname: '/course/[courseId]', params: { courseId: course.id } })}
      style={({ pressed }) => pressed && styles.pressed}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <CourseBadge label={course.badge} />
          <View style={styles.titleBlock}>
            <ThemedText type="smallBold" style={styles.title} numberOfLines={2}>
              {course.title}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {t.course.summary(level, course.lessonsTotal)}
            </ThemedText>
          </View>
          <Icon name="chevronRight" size={16} color="textSecondary" />
        </View>

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
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  card: {
    gap: Spacing.three,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  titleBlock: {
    flex: 1,
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
  },
});
