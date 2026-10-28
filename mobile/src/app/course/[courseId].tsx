import { router, Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LessonRow, type LessonStatus } from '@/components/course/lesson-row';
import { CourseBadge } from '@/components/home/course-badge';
import { ThemedText } from '@/components/themed-text';
import { BottomBar } from '@/components/ui/bottom-bar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { Label } from '@/components/ui/label';
import { WeekTrack } from '@/components/ui/week-track';
import { Fonts, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { getCourseProgress, getNextLesson, MIDTERM_LAST_WEEK } from '@/data/courses';
import { useCourses } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

export default function CourseScreen() {
  const { courseId } = useLocalSearchParams<{ courseId: string }>();
  const insets = useSafeAreaInsets();
  const course = useCourses().find((item) => item.id === courseId);
  const { t } = useI18n();
  const theme = useTheme();

  if (!course) {
    return (
      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + Spacing.four }]}>
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
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.content}>
        <Stack.Screen options={{ title: course.title }} />

        <Card style={[styles.header, { backgroundColor: theme.primarySoft, borderColor: theme.primaryBorder }]}>
          <View style={styles.headerTop}>
            <CourseBadge label={course.badge} />
            <Label style={styles.headerSummary}>{t.course.summary(t.levels[course.level], course.lessonsTotal)}</Label>
            <ThemedText type="stat" themeColor={isFinished ? 'success' : 'primary'} style={styles.percent}>
              {Math.round(getCourseProgress(course) * 100)} %
            </ThemedText>
          </View>
          <ThemedText role="heading" type="heading">
            {course.title}
          </ThemedText>
          <WeekTrack
            course={course}
            currentLessonId={nextLesson?.id}
            accessibilityLabel={t.common.progressOf(course.title)}
          />
          <ThemedText type="small" themeColor={isFinished ? 'success' : 'textSecondary'}>
            {isFinished ? t.course.finished : t.course.lessonsCompleted(course.lessonsCompleted, course.lessonsTotal)}
          </ThemedText>
        </Card>

        {(midtermReview || finalReview) && (
          <View style={styles.reviews}>
            {midtermReview && (
              <ReviewChip title={t.course.reviewMidterm} onPress={() => openLesson(midtermReview.id)} />
            )}
            {finalReview && <ReviewChip title={t.course.reviewFinal} onPress={() => openLesson(finalReview.id)} />}
          </View>
        )}

        {sections.map((section) => (
          <View key={section.title ?? 'lessons'} style={styles.list}>
            {section.title && (
              <View style={styles.sectionHeader}>
                <Label>{section.title}</Label>
                <ThemedText type="small" themeColor="textSecondary" style={styles.sectionCount}>
                  {`${section.lessons.filter((lesson) => course.completedLessonIds.includes(lesson.id)).length}/${section.lessons.length}`}
                </ThemedText>
              </View>
            )}
            <View>
              {section.lessons.map((lesson, index) => {
                const number = lesson.week ?? course.lessons.indexOf(lesson) + 1;
                return (
                  <LessonRow
                    key={lesson.id}
                    number={number}
                    caption={lesson.week ? t.lesson.weekLabel(number) : t.lesson.lessonLabel(number)}
                    title={lesson.title}
                    status={getStatus(lesson.id)}
                    onPress={() => openLesson(lesson.id)}
                    milestone={
                      lesson.id === midtermReview?.id
                        ? t.course.midtermTag
                        : lesson.id === finalReview?.id
                          ? t.course.finalTag
                          : undefined
                    }
                    isFirst={index === 0}
                    isLast={index === section.lessons.length - 1}
                  />
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>

      {nextLesson && (
        <BottomBar>
          <Button
            title={course.lessonsCompleted === 0 ? t.course.start : t.course.continue}
            onPress={() => openLesson(nextLesson.id)}
          />
        </BottomBar>
      )}
    </View>
  );
}

/** Shortcut to an exam review week: an outlined pill with a flag, quieter than the main button. */
function ReviewChip({ title, onPress }: { title: string; onPress: () => void }) {
  const theme = useTheme();

  return (
    <Pressable
      role="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.review,
        { borderColor: theme.border, backgroundColor: pressed ? theme.backgroundElement : 'transparent' },
      ]}>
      <Icon name="flag" size={14} color="textSecondary" />
      <ThemedText type="smallBold" numberOfLines={1} style={styles.reviewText}>
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.four,
    gap: Spacing.four,
  },
  header: {
    padding: Spacing.four - 4,
    gap: Spacing.three,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  headerSummary: {
    flex: 1,
  },
  percent: {
    fontSize: 20,
    lineHeight: 26,
  },
  list: {
    gap: Spacing.two,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionCount: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
  reviews: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  review: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.two,
    minHeight: 40,
    paddingHorizontal: Spacing.three,
    borderRadius: Radius.full,
    borderWidth: 1,
  },
  reviewText: {
    flexShrink: 1,
  },
});
