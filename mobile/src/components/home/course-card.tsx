import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Radius, Spacing } from '@/constants/theme';
import { getCourseProgress, type Course } from '@/data/courses';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  const theme = useTheme();
  const progress = getCourseProgress(course);
  const isFinished = course.lessonsCompleted === course.lessonsTotal;
  const { t } = useI18n();
  const level = t.levels[course.level];

  return (
    <Pressable
      role="button"
      accessibilityLabel={t.courseCard.accessibilityLabel(course.title, level)}
      onPress={() => router.push({ pathname: '/course/[courseId]', params: { courseId: course.id } })}
      style={({ pressed }) => pressed && styles.pressed}>
      <Card>
        <View style={styles.header}>
          <View style={[styles.badge, { backgroundColor: theme.backgroundSelected }]}>
            <ThemedText type="smallBold" themeColor="accent" numberOfLines={1}>
              {course.badge}
            </ThemedText>
          </View>
          <View style={styles.titleBlock}>
            <ThemedText style={styles.title} numberOfLines={2}>
              {course.title}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {level}
            </ThemedText>
          </View>
        </View>

        <ProgressBar
          progress={progress}
          color={isFinished ? 'success' : 'primary'}
          accessibilityLabel={t.common.progressOf(course.title)}
        />
        <ThemedText type="small" themeColor="textSecondary">
          {course.lessonsCompleted === 0
            ? t.courseCard.notStarted(course.lessonsTotal)
            : t.courseCard.lessonsDone(course.lessonsCompleted, course.lessonsTotal)}
        </ThemedText>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  badge: {
    width: 48,
    height: 48,
    borderRadius: Radius.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBlock: {
    flex: 1,
  },
  title: {
    fontWeight: 600,
  },
  pressed: {
    opacity: 0.8,
  },
});
