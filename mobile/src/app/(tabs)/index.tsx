import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { CourseCard } from '@/components/home/course-card';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Spacing } from '@/constants/theme';
import { courses, getCourseProgress, getCurrentCourse } from '@/data/courses';

export default function HomeScreen() {
  const currentCourse = getCurrentCourse();

  return (
    <Screen eyebrow="Bonjour 👋" title="Prêt à coder aujourd’hui ?">
      {currentCourse && (
        <Card elevated style={styles.resumeCard}>
          <ThemedText type="smallBold" themeColor="primary">
            CONTINUER
          </ThemedText>
          <ThemedText style={styles.resumeTitle}>{currentCourse.nextLesson}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {currentCourse.title} · Leçon {currentCourse.lessonsCompleted + 1}/
            {currentCourse.lessonsTotal}
          </ThemedText>
          <ProgressBar
            progress={getCourseProgress(currentCourse)}
            accessibilityLabel={`Progression ${currentCourse.title}`}
          />
          <Button
            title="Continuer ma leçon"
            style={styles.resumeButton}
            onPress={() =>
              router.push({ pathname: '/lesson/[courseId]', params: { courseId: currentCourse.id } })
            }
          />
        </Card>
      )}

      <View style={styles.section}>
        <ThemedText style={styles.sectionTitle}>Mes parcours</ThemedText>
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
