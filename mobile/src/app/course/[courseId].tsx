import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LessonRow, type LessonStatus } from '@/components/course/lesson-row';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ProgressBar } from '@/components/ui/progress-bar';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { getCourseProgress, getNextLesson, MIDTERM_LAST_WEEK } from '@/data/courses';
import { useCourses } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';

export default function CourseScreen() {
  const { courseId } = useLocalSearchParams<{ courseId: string }>();
  const insets = useSafeAreaInsets();
  const course = useCourses().find((item) => item.id === courseId);
  const { t } = useI18n();

  const contentStyle = [styles.content, { paddingBottom: insets.bottom + Spacing.four }];

  if (!course) {
    return (
      <ScrollView contentContainerStyle={contentStyle}>
        <Stack.Screen options={{ title: t.course.fallbackTitle }} />
        <ThemedText type="heading">{t.course.notFound}</ThemedText>
        <Button title={t.common.back} variant="secondary" onPress={() => router.back()} />
      </ScrollView>
    );
  }

  const nextLesson = getNextLesson(course);
  const isFinished = !nextLesson;

  const openLesson = (lessonId: string) =>
    router.push({
      pathname: '/lesson/[courseId]/[lessonId]',
      params: { courseId: course.id, lessonId },
    });

  const getStatus = (lessonId: string): LessonStatus => {
    if (course.completedLessonIds.includes(lessonId)) {
      return 'done';
    }
    return lessonId === nextLesson?.id ? 'next' : 'todo';
  };

  // Courses that follow the semester are split into the midterm and final weeks.
  const isWeekly = course.lessons.some((lesson) => lesson.week !== undefined);
  const lastWeek = Math.max(0, ...course.lessons.map((lesson) => lesson.week ?? 0));
  const sections = isWeekly
    ? [
        {
          title: t.course.midtermSection(1, MIDTERM_LAST_WEEK),
          lessons: course.lessons.filter((lesson) => (lesson.week ?? 0) <= MIDTERM_LAST_WEEK),
        },
        {
          title: t.course.finalSection(MIDTERM_LAST_WEEK + 1, lastWeek),
          lessons: course.lessons.filter((lesson) => (lesson.week ?? 0) > MIDTERM_LAST_WEEK),
        },
      ].filter((section) => section.lessons.length > 0)
    : [{ title: null, lessons: course.lessons }];
  // The last week of each half ends with the review of that exam.
  const midtermReview = isWeekly ? course.lessons.find((lesson) => lesson.week === MIDTERM_LAST_WEEK) : undefined;
  const finalReview =
    isWeekly && lastWeek > MIDTERM_LAST_WEEK ? course.lessons.find((lesson) => lesson.week === lastWeek) : undefined;

  return (
    <ScrollView contentContainerStyle={contentStyle}>
      <Stack.Screen options={{ title: course.title }} />

      <View style={styles.header}>
        <ThemedText type="small" themeColor="textSecondary">
          {t.course.summary(t.levels[course.level], course.lessonsTotal)}
        </ThemedText>
        <ThemedText role="heading" type="heading">
          {course.title}
        </ThemedText>
        <ProgressBar
          progress={getCourseProgress(course)}
          color={isFinished ? 'success' : 'primary'}
          accessibilityLabel={t.common.progressOf(course.title)}
        />
        <ThemedText type="small" themeColor={isFinished ? 'success' : 'textSecondary'}>
          {isFinished ? t.course.finished : t.course.lessonsCompleted(course.lessonsCompleted, course.lessonsTotal)}
        </ThemedText>
      </View>

      {nextLesson && (
        <Button
          title={course.lessonsCompleted === 0 ? t.course.start : t.course.continue}
          onPress={() => openLesson(nextLesson.id)}
        />
      )}

      {(midtermReview || finalReview) && (
        <View style={[styles.reviews, nextLesson && styles.underButton]}>
          {midtermReview && (
            <Button
              title={t.course.reviewMidterm}
              variant="secondary"
              style={styles.review}
              onPress={() => openLesson(midtermReview.id)}
            />
          )}
          {finalReview && (
            <Button
              title={t.course.reviewFinal}
              variant="secondary"
              style={styles.review}
              onPress={() => openLesson(finalReview.id)}
            />
          )}
        </View>
      )}

      {sections.map((section) => (
        <View key={section.title ?? 'lessons'} style={styles.list}>
          {section.title && <Label>{section.title}</Label>}
          {section.lessons.map((lesson) => (
            <LessonRow
              key={lesson.id}
              number={lesson.week ?? course.lessons.indexOf(lesson) + 1}
              title={lesson.title}
              status={getStatus(lesson.id)}
              onPress={() => openLesson(lesson.id)}
            />
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    gap: Spacing.four,
  },
  header: {
    gap: Spacing.two,
  },
  list: {
    gap: Spacing.two,
  },
  reviews: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  // Closer to the start / continue button they complete.
  underButton: {
    marginTop: -Spacing.two,
  },
  review: {
    flex: 1,
    paddingHorizontal: Spacing.two,
  },
});
