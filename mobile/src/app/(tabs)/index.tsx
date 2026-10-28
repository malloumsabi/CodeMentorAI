import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { CourseBadge } from '@/components/home/course-badge';
import { CourseList } from '@/components/home/course-list';
import { DailyGoalCard } from '@/components/home/daily-goal-card';
import { StreakBadge } from '@/components/home/streak-badge';
import { Avatar } from '@/components/profile/avatar';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { StatStrip } from '@/components/ui/stat-strip';
import { WeekTrack } from '@/components/ui/week-track';
import { Fonts, Spacing } from '@/constants/theme';
import { getCourseProgress, getCurrentCourse, getGroupForYear, getNextLesson } from '@/data/courses';
import { useProfile } from '@/hooks/use-profile';
import { useCourses } from '@/hooks/use-progress';
import { useTheme } from '@/hooks/use-theme';
import { useI18n } from '@/i18n';

export default function HomeScreen() {
  const courses = useCourses();
  const currentCourse = getCurrentCourse(courses);
  const nextLesson = currentCourse && getNextLesson(currentCourse);
  const { t } = useI18n();
  const { profile } = useProfile();
  const theme = useTheme();

  const lessonsDone = courses.reduce((total, course) => total + course.lessonsCompleted, 0);
  const coursesDone = courses.filter((course) => course.lessonsCompleted === course.lessonsTotal).length;
  const lessonsTotal = courses.reduce((total, course) => total + course.lessonsTotal, 0);
  const overallPercent = lessonsTotal > 0 ? Math.round((lessonsDone / lessonsTotal) * 100) : 0;
  const stats = [
    { value: String(lessonsDone), label: t.profile.lessonsDone },
    { value: String(coursesDone), label: t.profile.coursesDone },
    { value: `${overallPercent} %`, label: t.profile.overallProgress },
  ];
  // Only the started courses; before any lesson, the courses of the student's year as suggestions.
  const startedCourses = courses.filter((course) => course.lessonsCompleted > 0);
  const suggestedGroup = (profile && getGroupForYear(profile.year)) ?? 'basics';
  const listedCourses =
    startedCourses.length > 0 ? startedCourses : courses.filter((course) => course.group === suggestedGroup);
  // The first explanation of the lesson, as a short description under its title.
  const nextLessonIntro = nextLesson?.blocks.find((block) => block.type === 'text');

  return (
    <Screen
      eyebrow={profile ? t.years[profile.year] : undefined}
      title={profile ? t.home.greeting(profile.name) : undefined}
      accessory={
        profile && (
          <View style={styles.accessory}>
            <StreakBadge />
            <Pressable
              role="button"
              accessibilityLabel={t.tabs.profile}
              onPress={() => router.navigate('/profile')}
              hitSlop={8}>
              <Avatar name={profile.name} />
            </Pressable>
          </View>
        )
      }>
      {currentCourse && nextLesson ? (
        <Card style={[styles.resume, { backgroundColor: theme.primarySoft, borderColor: theme.primaryBorder }]}>
          <View style={styles.resumeHeader}>
            <CourseBadge label={currentCourse.badge} />
            <View style={styles.resumeHeaderText}>
              <Label themeColor="primary" numberOfLines={1}>
                {t.home.resumeLabel(currentCourse.title)}
              </Label>
              <ThemedText type="small" themeColor="textSecondary" style={styles.mono}>
                {nextLesson.week
                  ? t.lesson.weekCounter(nextLesson.week, currentCourse.lessonsTotal)
                  : t.lesson.counter(currentCourse.lessons.indexOf(nextLesson) + 1, currentCourse.lessonsTotal)}
              </ThemedText>
            </View>
            <ThemedText type="stat" themeColor="primary" style={styles.resumePercent}>
              {Math.round(getCourseProgress(currentCourse) * 100)} %
            </ThemedText>
          </View>
          <View style={styles.resumeText}>
            <ThemedText style={styles.resumeTitle}>{nextLesson.title}</ThemedText>
            {nextLessonIntro?.type === 'text' && (
              <ThemedText type="small" themeColor="textSecondary" numberOfLines={2}>
                {nextLessonIntro.text}
              </ThemedText>
            )}
          </View>
          <WeekTrack
            course={currentCourse}
            currentLessonId={nextLesson.id}
            accessibilityLabel={t.common.progressOf(currentCourse.title)}
          />
          <Button
            title={t.home.resumeButton}
            onPress={() =>
              router.push({
                pathname: '/lesson/[courseId]/[lessonId]',
                params: { courseId: currentCourse.id, lessonId: nextLesson.id },
              })
            }
          />
        </Card>
      ) : (
        <Card style={styles.resume}>
          <View style={styles.resumeText}>
            <ThemedText style={styles.resumeTitle}>{t.home.startTitle}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {t.home.startHint}
            </ThemedText>
          </View>
          <Button title={t.home.startButton} onPress={() => router.navigate('/courses')} />
        </Card>
      )}

      <DailyGoalCard />

      <StatStrip stats={stats} />

      <View>
        <View style={styles.sectionHeader}>
          <ThemedText type="section">{startedCourses.length > 0 ? t.home.myCourses : t.home.suggested}</ThemedText>
          <Link href="/courses" style={styles.seeAll}>
            <ThemedText type="smallBold" themeColor="primary">
              {t.home.seeAll}
            </ThemedText>
          </Link>
        </View>
        <CourseList courses={listedCourses} showProgress />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  accessory: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  resume: {
    padding: Spacing.four - 4,
    gap: Spacing.three,
  },
  resumeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  resumeHeaderText: {
    flex: 1,
    gap: Spacing.half,
  },
  resumeText: {
    gap: Spacing.one + 2,
  },
  resumeTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 600,
  },
  mono: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
  resumePercent: {
    fontSize: 20,
    lineHeight: 26,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingBottom: Spacing.two,
  },
  seeAll: {
    paddingVertical: Spacing.two,
  },
});
