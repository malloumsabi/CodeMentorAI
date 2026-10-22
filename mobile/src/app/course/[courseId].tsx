import { router, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LessonRow, type LessonStatus } from '@/components/course/lesson-row';
import { ThemedText } from '@/components/themed-text';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { getCourseProgress, getNextLesson } from '@/data/courses';
import { useCourses } from '@/hooks/use-progress';

export default function CourseScreen() {
  const { courseId } = useLocalSearchParams<{ courseId: string }>();
  const insets = useSafeAreaInsets();
  const course = useCourses().find((item) => item.id === courseId);

  const contentStyle = [styles.content, { paddingBottom: insets.bottom + Spacing.four }];

  if (!course) {
    return (
      <ScrollView contentContainerStyle={contentStyle}>
        <Stack.Screen options={{ title: 'Parcours' }} />
        <ThemedText style={styles.title}>Parcours introuvable</ThemedText>
        <Button title="Retour" variant="secondary" onPress={() => router.back()} />
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

  const getStatus = (index: number): LessonStatus => {
    if (index < course.lessonsCompleted) {
      return 'done';
    }
    return index === course.lessonsCompleted ? 'next' : 'locked';
  };

  return (
    <ScrollView contentContainerStyle={contentStyle}>
      <Stack.Screen options={{ title: course.title }} />

      <View style={styles.header}>
        <ThemedText type="small" themeColor="textSecondary">
          {course.level} · {course.lessonsTotal} leçons
        </ThemedText>
        <ThemedText role="heading" style={styles.title}>
          {course.title}
        </ThemedText>
        <ProgressBar
          progress={getCourseProgress(course)}
          color={isFinished ? 'success' : 'primary'}
          accessibilityLabel={`Progression ${course.title}`}
        />
        <ThemedText type="small" themeColor={isFinished ? 'success' : 'textSecondary'}>
          {isFinished
            ? 'Parcours terminé 🎉'
            : `${course.lessonsCompleted}/${course.lessonsTotal} leçons terminées`}
        </ThemedText>
      </View>

      {nextLesson && (
        <Button
          title={course.lessonsCompleted === 0 ? 'Commencer le parcours' : 'Continuer'}
          onPress={() => openLesson(nextLesson.id)}
        />
      )}

      <View style={styles.list}>
        {course.lessons.map((lesson, index) => (
          <LessonRow
            key={lesson.id}
            number={index + 1}
            title={lesson.title}
            status={getStatus(index)}
            onPress={() => openLesson(lesson.id)}
          />
        ))}
      </View>
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
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: 700,
  },
  list: {
    gap: Spacing.two,
  },
});
