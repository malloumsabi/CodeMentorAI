import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Spacing } from '@/constants/theme';
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

  return (
    <Screen eyebrow={profile ? t.home.greeting(profile.name) : undefined} title={t.home.title}>
      {!currentCourse && (
        <Card elevated style={styles.resumeCard}>
          <ThemedText style={styles.resumeTitle}>{t.home.startTitle}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {t.home.startHint}
          </ThemedText>
          <Button title={t.home.startButton} style={styles.resumeButton} onPress={() => router.push('/courses')} />
        </Card>
      )}

      {currentCourse && nextLesson && (
        <Card elevated style={styles.resumeCard}>
          <ThemedText type="smallBold" themeColor="primary">
            {t.home.resume}
          </ThemedText>
          <ThemedText style={styles.resumeTitle}>{nextLesson.title}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {t.home.resumeDetails(
              currentCourse.title,
              currentCourse.lessonsCompleted + 1,
              currentCourse.lessonsTotal
            )}
          </ThemedText>
          <ProgressBar
            progress={getCourseProgress(currentCourse)}
            accessibilityLabel={t.common.progressOf(currentCourse.title)}
          />
          <Button
            title={t.home.resumeButton}
            style={styles.resumeButton}
            onPress={() =>
              router.push({
                pathname: '/lesson/[courseId]/[lessonId]',
                params: { courseId: currentCourse.id, lessonId: nextLesson.id },
              })
            }
          />
        </Card>
      )}

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>{t.home.myCourses}</ThemedText>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  resumeCard: {
    padding: Spacing.four,
  },
  resumeTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 700,
  },
  resumeButton: {
    marginTop: Spacing.two,
  },
  section: {
    gap: Spacing.three,
  },
  sectionTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 700,
  },
});
