import { Link, router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { CourseRow } from '@/components/home/course-row';
import { Avatar } from '@/components/profile/avatar';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Fonts, Spacing } from '@/constants/theme';
import { getCourseProgress, getCurrentCourse, getNextLesson } from '@/data/courses';
import { useProfile } from '@/hooks/use-profile';
import { useCourses } from '@/hooks/use-progress';
import { useI18n } from '@/i18n';

export default function HomeScreen() {
  const courses = useCourses();
  const currentCourse = getCurrentCourse(courses);
  const nextLesson = currentCourse && getNextLesson(currentCourse);
  const { t } = useI18n();
  const { profile } = useProfile();

  const lessonsDone = courses.reduce((total, course) => total + course.lessonsCompleted, 0);
  const coursesDone = courses.filter((course) => course.lessonsCompleted === course.lessonsTotal).length;
  // The first explanation of the lesson, as a short description under its title.
  const nextLessonIntro = nextLesson?.blocks.find((block) => block.type === 'text');

  return (
    <Screen
      eyebrow={profile ? t.years[profile.year] : undefined}
      title={profile ? t.home.greeting(profile.name) : undefined}
      accessory={
        profile && (
          <Pressable
            role="button"
            accessibilityLabel={t.tabs.profile}
            onPress={() => router.navigate('/profile')}
            hitSlop={8}>
            <Avatar name={profile.name} />
          </Pressable>
        )
      }>
      {currentCourse && nextLesson ? (
        <Card style={styles.resume}>
          <View style={styles.resumeHeader}>
            <Label themeColor="primary">{t.home.resumeLabel(currentCourse.title)}</Label>
            <ThemedText type="small" themeColor="textSecondary" style={styles.mono}>
              {nextLesson.week ?? currentCourse.lessons.indexOf(nextLesson) + 1}/{currentCourse.lessonsTotal}
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
          <ProgressBar
            progress={getCourseProgress(currentCourse)}
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

      <View style={styles.stats}>
        <Card variant="outline" style={styles.stat}>
          <ThemedText type="stat">{lessonsDone}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {t.profile.lessonsDone}
          </ThemedText>
        </Card>
        <Card variant="outline" style={styles.stat}>
          <ThemedText type="stat">{coursesDone}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {t.profile.coursesDone}
          </ThemedText>
        </Card>
      </View>

      <View>
        <View style={styles.sectionHeader}>
          <ThemedText type="section">{t.home.myCourses}</ThemedText>
          <Link href="/courses" style={styles.seeAll}>
            <ThemedText type="smallBold" themeColor="primary">
              {t.home.seeAll}
            </ThemedText>
          </Link>
        </View>
        {courses.map((course) => (
          <CourseRow key={course.id} course={course} showProgress />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  resume: {
    padding: Spacing.four - 4,
    gap: Spacing.three,
  },
  resumeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
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
  stats: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  stat: {
    flex: 1,
    gap: Spacing.half,
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
